## Function: `Lib.Script.moveWater`
- Moves water in the specified direction.
> Server Only, If you are using the Pfe Lib you also use Lib.moveWater
### Parameters:

- `Part` (Instance): The instance to be moved.
- `Vector3` (Vector3): The direction in which to move the water.
- `duration` (number): The duration of the movement animation.
- `isLocalSpace` (boolean): Whether the movement should be relative to the water's local rotation.

### Returns:

- `boolean`: Returns `true` if the water movement was successful, otherwise `false`.

## Example
```lua
Lib.Script.moveWater(Lib.Map.Intro._Water1, Vector3.new(0, 30, 0), 10, true)
```