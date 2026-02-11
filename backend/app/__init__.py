from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from app.config import Config

db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)
    db.init_app(app)
    jwt.init_app(app)

    # 🔹 AUTH
    from app.routes.auth_routes import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/api/auth")

    # 🔹 WALLET
    from app.routes.wallet_routes import wallet_bp
    app.register_blueprint(wallet_bp, url_prefix="/api/wallet")

    # 🔹 ADMIN
    from app.routes.admin_routes import admin_bp
    app.register_blueprint(admin_bp, url_prefix="/api/admin")

    # (later)
    # from app.routes.attendance_routes import attendance_bp
    # app.register_blueprint(attendance_bp, url_prefix="/api/attendance")

    return app
