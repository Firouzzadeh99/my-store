
# پروژه Django و Next.js با Docker

این پروژه شامل یک اپلیکیشن **Django** برای بک‌اند و **Next.js** برای فرانت‌اند است که با استفاده از **Docker** در یک محیط کانتینری اجرا می‌شود. پروژه برای استفاده آسان از Docker Compose برای ساخت، اجرای و مدیریت سرویس‌ها تنظیم شده است.

## پیش‌نیازها

قبل از شروع، اطمینان حاصل کنید که ابزارهای زیر را روی سیستم خود نصب کرده‌اید:

```bash
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)
```

## مراحل راه‌اندازی پروژه

**کلون کردن پروژه از GitHub**:
   
   ابتدا پروژه را از GitHub کلون کنید:

   ```bash
   git clone https://github.com/Firouzzadeh99/my-store.git
   cd my-store.git
   ```

**ساخت و راه‌اندازی کانتینرها با Docker Compose**:
   
   پس از کلون کردن پروژه، از دستور زیر برای ساخت و اجرای کانتینرها استفاده کنید(اگر فایل setup.sh وجود دارد نیاز به اجرای دستور زیر نیست و دستور بعدی در مورد setup اجرا شود):

   ```bash
   docker compose up --build
   ```
   برای اجرای دستور setup رمینال را در مسیر پروژه باز کنید و دستور زیر را اجرا کنید تا برنامه اجرا شود.
   ```bash
   ./setup.sh
   ```
 اگر اجرا نشد دستور زیر را اجرا کنید و بعد  setup  را اجرا کنید.
   ```bash
   chmod +x setup.sh 
   ```
   

   این دستور تمام سرویس‌های مورد نیاز پروژه را بر اساس تنظیمات موجود در فایل `docker-compose.yml` می‌سازد و راه‌اندازی می‌کند.

 **اجرای مایگریشن‌ها برای پایگاه داده**:
   
   پس از اجرای کانتینرها، برای اعمال مایگریشن‌ها و ایجاد دیتابیس از دستورهای زیر استفاده کنید(اگر فایل دیتابیس موجود است نیاز به اجرا نیست):

   ```bash
   docker compose exec backend python manage.py makemigrations
   docker compose exec backend python manage.py migrate
   ```

**دسترسی به پروژه**:
   
   پس از اجرای کانتینرها و اعمال مایگریشن‌ها، شما می‌توانید پروژه را در مرورگر مشاهده کنید:
   
   - **Next.js (فرانت‌اند)**: [http://localhost:3000](http://localhost:3000)
   - **Django (بک‌اند)**: [http://localhost:8000](http://localhost:8000)

## توسعه و راه‌اندازی مجدد

اگر نیاز به راه‌اندازی مجدد کانتینرها دارید، می‌توانید از دستور زیر استفاده کنید:

```bash
docker compose down
docker compose up --build
```


### توضیحات اضافی

- در صورتی که نیاز به نصب پکیج‌های جدید در پروژه دارید، از دستور زیر استفاده کنید:

  ```bash
  docker compose exec backend pip install <package-name>
  docker compose exec frontend npm install <package-name>
  ```

- برای تغییرات در پایگاه داده، پس از هر تغییر در مدل‌ها باید دوباره مایگریشن‌ها را اجرا کنید.

---

با این دستورالعمل‌ها، کسی که پروژه را از GitHub دریافت می‌کند، به راحتی می‌تواند پروژه را راه‌اندازی کرده و از آن استفاده کند.
```
