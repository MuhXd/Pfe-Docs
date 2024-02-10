
## Function: `Lib.Survive`
- Makes the Player Win the map.
> Server Only, you can also use ``Lib.Script.Survive``
### Parameters:
- `Player` (Player): The player to win.
### Returns:
- `String | Error`: returns a string with an ``error`` or a ``error message``
## Example
```lua
for i,Player in require(game.ReplicatedStorage.GameLib).GetPlayersWithPlayState("Playing") do
	Lib:Survive(Player)
end
```

> Added in 1.0.0