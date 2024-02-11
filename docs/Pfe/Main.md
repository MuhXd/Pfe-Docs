# PFE LIB

The PFE Lib is a versatile library that can run on both the client and server environments, offering flexibility and functionality across different contexts, it has features from the Open flood test Lib as well!

## PFE LIB CAN RUN ON THE CLIENT AND SERVER

This section highlights the capability of the PFE Lib to operate seamlessly on both the client and server sides of your script.

### Version list
> This lib can backport and use ``older versions``, to view all versions go to [Version List](Pfe/Versions.md)

### Lib.Client Example

To illustrate how the PFE Lib behaves differently based on whether it's running on the client or server, read the following Script:

```lua
if Lib.Client then
    print("The script is running on the client")
else
    print("The script is running on the server")
end
```

> For more examples and detailed information on Client Value, you can refer to the [Lib.Client documentation](Pfe/Client.md)

### Lib.moveWater Example
- if the _Water1 is in Intro then it moves 30 Y at 10 seconds
```lua
Lib.moveWater(Lib.Map.Intro._Water1, Vector3.new(0, 30, 0), 10, true)
```

> For more examples and detailed information on moveWater function, you can refer to the [Lib.moveWater documentation](openfloodtest/Lib.moveWater.md)

### Lib.HookLiquidSwimEvent Example
- Hooks to each not required both functions
```lua
Lib:HookLiquidSwimEvent(function(state)
	print("Entering "..state)
end,function(state)
	print("Exiting "..state)
end)
```

> For more examples and detailed information on HookLiquidSwimEvent function, you can refer to the [Lib.HookLiquidSwimEvent documentation](Pfe/HookLiquidSwimEvent.md)

### Lib.setWaterState Example
- if the _Water1 is in Intro then it sets it to acid
```lua
Lib.Script.setWaterState(Lib.Map.Intro._Water1, "acid")
```
> For more examples and detailed information on setWaterState function, you can refer to the [Lib.setWaterState documentation](openfloodtest/Lib.setWaterState.md)

### Lib.Alert Example
- sends a alert
```lua
Lib:Alert("Test",Color3.new(1, 1, 1),10)
```
> For more examples and detailed information on Alert function, you can refer to the [Lib.Alert documentation](Pfe/Alert.md)

### Lib.Survive Example
- makes a player Survive
```lua
for i,Player in require(game.ReplicatedStorage.GameLib).GetPlayersWithPlayState("Playing") do
	Lib:Survive(Player)
end
```
> For more examples and detailed information on Survive function, you can refer to the [Lib.Survive documentation](Pfe/Survive.md)

### Lib.Camlock Example
- if the _Water1 is in intro lock camera to it
```lua
Lib.Script.Camlock(Lib.Map.Intro._Water1)
```
> For more examples and detailed information on Camlock function, you can refer to the [lib.Camlock documentation](openfloodtest/lib.Camlock.md)

### Lib.ExitRegion Example
- if the _Water1 is in intro lock camera to it
```lua
Lib.Script.ExitRegion(true,true)
```
> For more examples and detailed information on ExitRegion function, you can refer to the [lib.ExitRegion documentation](openfloodtest/lib.ExitRegion.md)

### Lib.Teleport Example
- if the _Water1 is in intro teleport to it
```lua
if Lib.Client then -- teleporting is not the same on the client / server
Lib:Teleport(game.Players.LocalPlayer,Lib.Map.Intro._Water1.CFrame,false) -- client
else
Lib:Teleport(require(game.ReplicatedStorage.GameLib).GetPlayersWithPlayState("Playing"),Lib.Map.Intro._Water1.CFrame,false) -- server
end
```
> For more examples and detailed information on Teleport function, you can refer to the [lib.Teleport documentation](Pfe/Teleport.md)


### Lib.GetAirValue Example
- Get current air amount
```lua
if Lib:GetAirValue(true) > 90 then
print("User has more then 90 air")
end
```
> For more examples and detailed information on GetAirValue function, you can refer to the [lib.GetAirValue documentation](Pfe/GetAirValue.md)

### Lib.CalledAirSwim Example
- Waits for air to be 20 then calls it
```lua
Lib:CalledAirSwim(20,true,function()
	print("User has 20 air combinded with Airtank")
end)
```
> For more examples and detailed information on CalledAirSwim function, you can refer to the [lib.CalledAirSwim documentation](Pfe/CalledAirSwim.md)