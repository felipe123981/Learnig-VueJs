# Define o caminho da pasta "vue" dentro do diretório atual do script
$vuePath = "C:\Users\user\Desktop\coding\vue"

# Verifica se a pasta "vue" existe
if (Test-Path $vuePath) {
    # Busca e remove todas as pastas .git dentro da pasta "vue"
    Get-ChildItem -Path $vuePath -Recurse -Directory -Force | Where-Object { $_.Name -eq ".git" } | ForEach-Object {
        Remove-Item -Path $_.FullName -Recurse -Force
        Write-Output "Removida: $($_.FullName)"
    }
    Write-Output "Todas as pastas .git foram removidas."
} else {
    Write-Output "A pasta 'vue' não foi encontrada."
}
