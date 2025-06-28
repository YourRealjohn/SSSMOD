local Library = loadstring(Game:HttpGet("https://raw.githubusercontent.com/bloodball/-back-ups-for-libs/main/wizard"))()
local PhantomForcesWindow = Library:NewWindow("Trench War")
local KillingCheats = PhantomForcesWindow:NewSection("cooldown or hitbox")
KillingCheats:CreateButton("no cooldown", function()
g = hookfunction(wait, function(seconds)
return g(0)
end)
print("HI")
end)
KillingCheats:CreateButton("hitbox", function()
local HeadSize = 10
local IsDisabled = true
local IsTeamCheckEnabled = false 

game:GetService('RunService').RenderStepped:Connect(function()
    if IsDisabled then
        local localPlayer = game:GetService('Players').LocalPlayer
        if not localPlayer then return end
        
        local localPlayerTeam = localPlayer.Team
        
        for _, player in ipairs(game:GetService('Players'):GetPlayers()) do
            if player ~= localPlayer and (not IsTeamCheckEnabled or player.Team ~= localPlayerTeam) then
                local humanoidRootPart = player.Character and player.Character:FindFirstChild("HumanoidRootPart")
                if humanoidRootPart then
                    humanoidRootPart.Size = Vector3.new(HeadSize, HeadSize, HeadSize)
                    humanoidRootPart.Transparency = 0.7
                    humanoidRootPart.BrickColor = BrickColor.new("Really blue")
                    humanoidRootPart.Material = Enum.Material.Neon
                    humanoidRootPart.CanCollide = false
                end
            end
        end
    end
end)
print("HI")
end)
