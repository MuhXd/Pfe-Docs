## Function: `Lib.Script.Camlock`
- Locks the camera to a object
> Server Only, If you are using the Pfe Lib you also use ``Lib.Camlock``
### Parameters:
- `Part` (Instance): The camera to be moved to (nil is unlock).
### Returns:
- `NONE`
## Example
```lua
Lib.Script.Camlock(Lib.Map.Intro._Water1)
```