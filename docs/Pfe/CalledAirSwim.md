
## Function: `Lib.CalledAirSwim`
- Runs event when air reaches a number
> Client Only, you can also use ``Lib.Script.CalledAirSwim``
### Parameters:
- `AirValue` (Number): The number to call the function.
- `AirTank` (bool): Should the function be called with airtank air as well.
- `RunFunction` (Function): Function that is called when air reaches the number.
### Returns:
- `boolean`: Returns `true` if the hook was successful, otherwise `false` or `error`.
## Example
```lua
Lib:CalledAirSwim(20,true,function()
	print("User has 20 air combinded with Airtank")
end)
```

> Added in 1.0.1