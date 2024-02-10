
## Function: `Lib.Client`
- Detects if the script is running on the `Client` or `Server`
### Returns:
- `boolean`: Returns `true` if Client, otherwise `false`.
## Example
```lua
if Lib.Client then
    -- Code to execute if the script is running on the client
    print("Running on the client")
else
    -- Code to execute if the script is running on the server
    print("Running on the server")
end
```

> Added in 1.0.0