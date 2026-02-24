# ============================================================
#  Portfolio Image Saver - Personal Website
#  Saves & renames ALL 13 portfolio images into:
#  C:\Users\user\Desktop\P-man\Personal-Website-\src\img
# ============================================================

# -----------------------------------------------
# CONFIGURATION
# Update $SourceFolder to wherever your images are
# -----------------------------------------------
$SourceFolder      = "$env:USERPROFILE\Desktop\portfolio_images\originals"
$DestinationFolder = "C:\Users\user\Desktop\P-man\Personal-Website-\src\img"

# -----------------------------------------------
# IMAGE NAME MAPPING
#   KEY   = your original filename
#   VALUE = descriptive name saved to your website
# -----------------------------------------------
$ImageNameMap = [ordered]@{

    # BATCH 1 - Data Analysis + Brand
    "image01.jpg" = "chipchip_2year_anniversary_celebration"
    "image02.jpg" = "cross_elasticity_demand_heatmap_discounting"
    "image03.jpg" = "rfm_segment_purchase_by_day_of_week"
    "image04.jpg" = "customer_segment_growth_over_time_stacked_area"
    "image05.jpg" = "customer_segment_overview_pie_bar_dashboard"

    # BATCH 2 - Personas, Delivery & AI
    "image06.jpg" = "customer_segment_percentages_and_counts_dashboard"
    "image07.jpg" = "lightgbm_potato_price_forecast_actual_vs_predicted"
    "image08.jpg" = "delivery_speed_effect_on_aov_by_customer_persona"
    "image09.jpg" = "order_distribution_delivery_windows_by_persona"
    "image10.jpg" = "context_adaptive_intent_fusion_caif_ai_architecture"

    # BATCH 3 - Holiday Spike Visualizations
    "image11.jpg" = "daily_orders_holiday_spikes_regular_vs_holiday_oct2025"
    "image12.jpg" = "daily_orders_holiday_spikes_regular_vs_holiday_nov2023"
    "image13.jpg" = "daily_orders_holiday_spikes_pre_holiday_post_breakdown"
}

# -----------------------------------------------
# Ensure destination folder exists
# -----------------------------------------------
if (-not (Test-Path -Path $DestinationFolder)) {
    New-Item -ItemType Directory -Path $DestinationFolder -Force | Out-Null
    Write-Host "Created folder: $DestinationFolder" -ForegroundColor Green
} else {
    Write-Host "Saving into: $DestinationFolder" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "Processing $($ImageNameMap.Count) images..." -ForegroundColor White
Write-Host ""

# -----------------------------------------------
# Copy & rename each image
# -----------------------------------------------
$successCount = 0
$failCount    = 0

foreach ($entry in $ImageNameMap.GetEnumerator()) {
    $originalName    = $entry.Key
    $descriptiveName = $entry.Value
    $sourcePath      = Join-Path -Path $SourceFolder -ChildPath $originalName
    $extension       = [System.IO.Path]::GetExtension($originalName)
    $destPath        = Join-Path -Path $DestinationFolder -ChildPath "$descriptiveName$extension"

    if (Test-Path -Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination $destPath -Force
        Write-Host "  [OK]  $descriptiveName$extension" -ForegroundColor Green
        $successCount++
    } else {
        Write-Host "  [SKIP] Not found: $originalName" -ForegroundColor Yellow
        Write-Host "         Expected at: $sourcePath" -ForegroundColor DarkGray
        $failCount++
    }
}

# -----------------------------------------------
# Summary
# -----------------------------------------------
Write-Host ""
Write-Host "--------------------------------------------------------------" -ForegroundColor DarkGray
Write-Host "  Done!  Saved: $successCount / $($ImageNameMap.Count)   Skipped: $failCount" -ForegroundColor White
Write-Host "  Output: $DestinationFolder" -ForegroundColor Cyan
Write-Host "--------------------------------------------------------------" -ForegroundColor DarkGray
Write-Host ""

# -----------------------------------------------
# Show all saved files
# -----------------------------------------------
Write-Host "Files now in src\img (portfolio images):" -ForegroundColor White
Write-Host ""
foreach ($entry in $ImageNameMap.GetEnumerator()) {
    $extension       = [System.IO.Path]::GetExtension($entry.Key)
    $descriptiveName = $entry.Value
    $destPath        = Join-Path -Path $DestinationFolder -ChildPath "$descriptiveName$extension"
    if (Test-Path -Path $destPath) {
        Write-Host "  src/img/$descriptiveName$extension" -ForegroundColor Magenta
    }
}

Write-Host ""
