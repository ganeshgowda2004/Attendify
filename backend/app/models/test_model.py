from app import db

class TestConnection(db.Model):
    __tablename__ = "test_connection"

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(100))
