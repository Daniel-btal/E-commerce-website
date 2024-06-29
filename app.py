# from flask import Flask, jsonify
# from flask_cors import CORS
# import mysql.connector

# app = Flask(name)
# CORS(app)

# def get_db_connection():
#     return mysql.connector.connect(
#         host="localhost",
#         user="yourusername",
#         password="yourpassword",
#         database="mydatabase"
#     )

# @app.route('/api/productlist', methods=['GET'])
# def get_productlist():
#     connection = get_db_connection()
#     cursor = connection.cursor(dictionary=True)
#     cursor.execute('SELECT * FROM productlist')
#     productlist = cursor.fetchall()
#     cursor.close()
#     connection.close()
#     return jsonify(productlist)

# if name == 'main':
#     app.run(debug=True)


from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  

@app.route("/students")
def students():
    return jsonify({"students": ["Goku", "Boku", "Doku", "Joku"]})

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="mydatabase"
    )


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    connection = get_db_connection()
    cursor = connection.cursor()
    
    cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
    connection.commit()
    
    cursor.close()
    connection.close()
    
    return jsonify({"message": "Registration successful"}), 201


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    
    cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cursor.fetchone()
    
    cursor.close()
    connection.close()
    
    if user:
        return jsonify({"message": "Login successful","user":user})
    else:
        return jsonify({"message": "Invalid username or password"}), 401

@app.route('/api/productlist', methods=['GET'])
def get_productlist():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute('SELECT * FROM productlist')
    productlist = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(productlist)

if __name__ == '__main__':
    app.run(debug=True)