async def send_email(name: str, email: str, message: str) -> bool:
    # TODO: Implement actual email sending logic (e.g., using SMTP or an API like SendGrid/Resend)
    print(f"Sending email from {name} <{email}>: {message}")
    return True
