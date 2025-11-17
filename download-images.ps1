# PowerShell script to download stock photos for MLKs Events
# Uses Unsplash Source API for high-quality stock images

Write-Host "Downloading stock photos for MLKs Events..." -ForegroundColor Cyan

# Portfolio Images - Wedding Events
Write-Host ""
Write-Host "Downloading wedding portfolio images..." -ForegroundColor Yellow
$weddingImages = @(
    @{url="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"; file="public/portfolio/wedding-1.jpg"},
    @{url="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"; file="public/portfolio/wedding-2.jpg"},
    @{url="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"; file="public/portfolio/wedding-3.jpg"}
)

# Portfolio Images - Corporate Events
Write-Host "Downloading corporate portfolio images..." -ForegroundColor Yellow
$corporateImages = @(
    @{url="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"; file="public/portfolio/corporate-1.jpg"},
    @{url="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"; file="public/portfolio/corporate-2.jpg"},
    @{url="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"; file="public/portfolio/corporate-3.jpg"}
)

# Portfolio Images - Social Events
Write-Host "Downloading social event portfolio images..." -ForegroundColor Yellow
$socialImages = @(
    @{url="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"; file="public/portfolio/social-1.jpg"},
    @{url="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"; file="public/portfolio/social-2.jpg"},
    @{url="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"; file="public/portfolio/social-3.jpg"}
)

# Instagram Feed Images
Write-Host "Downloading Instagram feed images..." -ForegroundColor Yellow
$instagramImages = @(
    @{url="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80"; file="public/instagram/1.jpg"},
    @{url="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80"; file="public/instagram/2.jpg"},
    @{url="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"; file="public/instagram/3.jpg"},
    @{url="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"; file="public/instagram/4.jpg"}
)

# Hero and About Images
Write-Host "Downloading hero and about images..." -ForegroundColor Yellow
$heroImages = @(
    @{url="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80"; file="public/hero-poster.jpg"},
    @{url="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"; file="public/about-image.jpg"}
)

# Function to download image
function Download-Image {
    param(
        [string]$Url,
        [string]$FilePath
    )
    
    try {
        $directory = Split-Path -Path $FilePath -Parent
        if (-not (Test-Path $directory)) {
            New-Item -ItemType Directory -Path $directory -Force | Out-Null
        }
        
        Write-Host "  Downloading: $FilePath" -ForegroundColor Gray
        Invoke-WebRequest -Uri $Url -OutFile $FilePath -UseBasicParsing
        Write-Host "  Success: $FilePath" -ForegroundColor Green
    }
    catch {
        Write-Host "  Failed to download: $FilePath" -ForegroundColor Red
        Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Download all images
$allImages = $weddingImages + $corporateImages + $socialImages + $instagramImages + $heroImages

foreach ($image in $allImages) {
    Download-Image -Url $image.url -FilePath $image.file
}

Write-Host ""
Write-Host "All images downloaded successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Note: These are placeholder images from Unsplash." -ForegroundColor Cyan
Write-Host "Replace them with your actual event photos when ready." -ForegroundColor Cyan
