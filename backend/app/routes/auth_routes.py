from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from app.models.user_model import User
from app import db

auth_bp = Blueprint("auth", __name__)

# 🔹 Employee Register
@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json

    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"msg": "User already exists"}), 400

    user = User(
        name=data["name"],
        email=data["email"],
        role="EMPLOYEE"
    )
    user.set_password(data["password"])

    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "Registration successful"}), 201


# 🔹 Employee Login
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    user = User.query.filter_by(email=data["email"], role="EMPLOYEE").first()

    if not user or not user.check_password(data["password"]):
        return jsonify({"msg": "Invalid credentials"}), 401

    token = create_access_token(
        identity={"id": user.id, "role": user.role}
    )

    return jsonify({
        "access_token": token,
        "role": user.role
    })


# 🔹 Admin Login
@auth_bp.route("/admin/login", methods=["POST"])
def admin_login():
    data = request.json
    admin = User.query.filter_by(email=data["email"], role="ADMIN").first()

    if not admin or not admin.check_password(data["password"]):
        return jsonify({"msg": "Invalid admin credentials"}), 401

    token = create_access_token(
        identity={"id": admin.id, "role": admin.role}
    )

    return jsonify({
        "access_token": token,
        "role": admin.role
    })
