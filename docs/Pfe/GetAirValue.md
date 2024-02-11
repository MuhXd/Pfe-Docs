
## Function: `Lib.GetAirValue`
- Get current air amount
> Client Only, you can also use ``Lib.Script.GetAirValue``
### Parameters:
- `Airtank` - (Bool): `True` if it adds airtank to air
### Returns:
- `Int`: Returns `Air Number` to use or `nil` if it couldn't find the air
## Example
```lua
if Lib:GetAirValue(true) > 90 then
print("User has more then 90 air")
end
```

> Added in 1.0.1