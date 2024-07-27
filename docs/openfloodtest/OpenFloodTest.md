# Open flood test
The Open Flood test Lib is a versatile library that can run on only the server environment.

### Lib.Script.moveWater Example

- if the _Water1 is in Intro then it moves 30 Y at 10 seconds

```lua
Lib.Script.moveWater(Lib.Map.Intro._Water1, Vector3.new(0, 30, 0), 10, true)
```

> For more examples and detailed information on moveWater function, you can refer to the [Lib.moveWater documentation](openfloodtest/Lib.moveWater.md)

### Lib.Script.setWaterState Example

- if the _Water1 is in Intro then it sets it to acid

```lua
Lib.Script.setWaterState(Lib.Map.Intro._Water1, "acid")
```

> For more examples and detailed information on setWaterState function, you can refer to the [Lib.setWaterState documentation](openfloodtest/Lib.setWaterState.md)

### EXTRA FEATURES

### Lib.Script.Camlock Example

- if the _Water1 is in intro lock camera to it

```lua
Lib.Script.Camlock(Lib.Map.Intro._Water1)
```

> For more examples and detailed information on Camlock function, you can refer to the [Lib.Camlock documentation](openfloodtest/lib.Camlock.md)

### Lib.Script.ExitRegion Example

- Enables the ExitRegion without having to click all the maps buttons

```lua
Lib.Script.ExitRegion(true,true)
```

> For more examples and detailed information on Camlock function, you can refer to the [Lib.ExitRegion documentation](openfloodtest/lib.ExitRegion.md)
