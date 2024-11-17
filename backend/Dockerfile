FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt /app/
RUN pip install -r requirements.txt

COPY . /app/

# پورت 8000 را باز می‌کنیم
EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
