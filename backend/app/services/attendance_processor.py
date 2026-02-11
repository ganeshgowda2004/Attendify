from datetime import time
from app.services.late_wallet_service import deduct_late_minutes

OFFICE_START_TIME = time(9, 30)

def process_attendance(user_id, check_in_time):
    if check_in_time > OFFICE_START_TIME:
        late_minutes = (
            (check_in_time.hour * 60 + check_in_time.minute)
            - (OFFICE_START_TIME.hour * 60 + OFFICE_START_TIME.minute)
        )

        status = deduct_late_minutes(user_id, late_minutes)
        return status, late_minutes

    return "ON_TIME", 0
