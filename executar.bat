@echo off
echo Iniciando o servidor web local...
echo.
echo Acesse o mapa em: http://localhost:8000
echo.
echo Pressione Ctrl+C para encerrar o servidor.
echo.

:: Verifica se o Python está instalado
python --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    python -m http.server 8000
) else (
    echo Python não encontrado. Tentando com PHP...
    php -v >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        php -S localhost:8000
    ) else (
        echo PHP não encontrado. Tentando com Node.js...
        node -v >nul 2>&1
        if %ERRORLEVEL% EQU 0 (
            npx http-server -p 8000
        ) else (
            echo Nenhum servidor web encontrado.
            echo Instale Python, PHP ou Node.js para executar o servidor local.
            pause
        )
    )
)
