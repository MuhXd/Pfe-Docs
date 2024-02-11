
## Function: `Lib.HookLiquidSwimEvent`
- Runs event when entering/exiting a liquid.
> Client Only, you can also use ``Lib.Script.HookLiquidSwimEvent``
### Parameters:
- `EnterEvent` (Function): Function that is called when entering the liquid.
- `ExitEvent` (Function): Function that is called when exiting the liquid.
### Returns:
- `boolean`: Returns `true` if the hook was successful, otherwise `false` or `error`.
- The `Function` sent has `state` and `object`
> `object` was added in `1.0.1`
## Example
```lua
Lib:HookLiquidSwimEvent(function(state,object)
	print("Entering "..object.." With state "..state)
end,function(state,object)
	print("Entering "..object.." With state "..state)
end)
```

> Added in 1.0.0