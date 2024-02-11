
## Function: `Lib.Teleport`
- Teleport Player
> Client & Server, you can also use ``Lib.Script.Teleport``
### Parameters:
- `player` (player): Player to teleport (can be table if called by server).
- `pos` (CFrame or Vector3): where to teleport them to.
- `faceFront` (bool): to face the front or not.
### Returns:
- `Failed` (Bool): if it failed for some reason
## Example
```lua
if Lib.Client then
Lib:Teleport(game.Players.LocalPlayer,Lib.Map.Intro._Water1.CFrame,false) -- client
else
Lib:Teleport(require(game.ReplicatedStorage.GameLib).GetPlayersWithPlayState("Playing"),Lib.Map.Intro._Water1.CFrame,false) -- server
end
```

> Added in 1.0.0