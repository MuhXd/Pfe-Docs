
## Function: `Lib.HookLiquidSwimEvent`
- Runs event when entering/exiting a liquid.
> Client Only
> you can also use Lib.HookLiquidSwimEvent Works
### Parameters:
- `EnterEvent` (Function): Function that is called when entering the liquid.
- `ExitEvent` (Function): Function that is called when exiting the liquid.
### Returns:
- `boolean`: Returns `true` if the hook was successful, otherwise `false` or `error`.
## Example
```lua
Lib:HookLiquidSwimEvent(function(state)
	print("Entering "..state)
end,function(state)
	print("Exiting "..state)
end)
```

> Added on 1.0.0