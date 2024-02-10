# PFE LIB

The PFE Lib is a versatile library that can run on both the client and server environments, offering flexibility and functionality across different contexts.

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

> For more examples and detailed information on moveWater function, you can refer to the [Lib.moveWater documentation](openfloodtest/OpenFloodTest.md)
