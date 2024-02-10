## Function: `Lib.Script.setWaterState`
- Moves water in the specified direction.
> Server Only, If you are using the Pfe Lib you also use ``Lib.setWaterState``
### Parameters:

- `Part` (Instance): The instance to be change states.
- `State` (String): The state to change to.

### Returns:

- `boolean`: Returns `true` if the water movement was successful, otherwise `false`.

## Example
```lua
Lib.Script.setWaterState(Lib.Map.Intro._Water1, "acid")
```
> You can also use custom liquid states