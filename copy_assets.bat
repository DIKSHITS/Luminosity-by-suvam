@echo off
cd /d "c:\Users\HP\Desktop\client1\wedding-client"
if not exist "public\assets\images" mkdir "public\assets\images"
copy "assets\images\*" "public\assets\images\"
echo Files copied successfully!
pause