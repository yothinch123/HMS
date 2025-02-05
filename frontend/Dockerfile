# ใช้ Node.js image
FROM node:18-alpine

# กำหนด working directory ใน container
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json หรือ yarn.lock
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ source code ทั้งหมดไปยัง container
COPY . .

# คอมไพล์แอป (ถ้าใช้ Next.js, ตัวคำสั่งนี้จะสร้าง production build)
RUN npm run build

# เปิด port ที่ต้องการ
EXPOSE 3000

# สั่งให้ container รันแอป
CMD ["npm", "start"]
