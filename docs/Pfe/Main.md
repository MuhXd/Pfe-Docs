# PFE LIB

The PFE Lib is a versatile library that can run on both the client and server environments, offering flexibility and functionality across different contexts, it has features from the Open flood test Lib as well!

## PFE LIB CAN RUN ON THE CLIENT AND SERVER

This section highlights the capability of the PFE Lib to operate seamlessly on both the client and server sides of your script.

### Lib.Client Example

To illustrate how the PFE Lib behaves differently based on whether it's running on the client or server, read the following Script:

```lua
if Lib.Client then
    print("The script is running on the client")
else
    print("The script is running on the server")
end
```

> For more examples and detailed information on client-side functionality, you can refer to the [PFE Client documentation](Pfe/Client.md)

### Lib.moveWater Example
- if the _Water1 is in Intro then it moves 30 Y at 10 seconds
```lua
Lib.moveWater(Lib.Map.Intro._Water1, Vector3.new(0, 30, 0), 10, true)
```

> For more examples and detailed information on moveWater function, you can refer to the [Lib.moveWater documentation](openfloodtest/Lib.moveWater.md)

### Lib.HookLiquidSwimEvent Example
- Hooks to each not required both function
```lua
Lib:HookLiquidSwimEvent(function(state)
	print("Entering "..state)
end,function(state)
	print("Exiting "..state)
end)
```

> For more examples and detailed information on HookLiquidSwimEvent function, you can refer to the [HookLiquidSwimEvent documentation](Pfe/HookLiquidSwimEvent.md)

### Lib.setWaterState Example
- if the _Water1 is in Intro then it sets it to acid
```lua
Lib.Script.setWaterState(Lib.Map.Intro._Water1, "acid")
```
> For more examples and detailed information on moveWater function, you can refer to the [Lib.setWaterState documentation](openfloodtest/Lib.setWaterState.md)

### Lib.Alert Example
- sends a alert
```lua
Lib:Alert("Test",Color3.new(1, 1, 1),10)
```
> For more examples and detailed information on moveWater function, you can refer to the [Lib.Alert documentation](Pfe/Alert.md)

### Lib.Survive Example
- makes a player Survive
```lua
for i,Player in require(game.ReplicatedStorage.GameLib).GetPlayersWithPlayState("Playing") do
	Lib:Survive(Player)
end
```
> For more examples and detailed information on moveWater function, you can refer to the [Lib.Survive documentation](Pfe/Survive.md)

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
> For more examples and detailed information on Camlock function, you can refer to the [lib.ExitRegion documentation](openfloodtest/lib.ExitRegion.md)

