# PFE LIB

The PFE Lib is a versatile library that can run on both the client and server environments, offering flexibility and functionality across different contexts.

## PFE LIB CAN RUN ON THE CLIENT AND SERVER

This section highlights the capability of the PFE Lib to operate seamlessly on both the client and server sides of your script.

### Client-Side Example

To illustrate how the PFE Lib behaves differently based on whether it's running on the client or server, read the following Lua:

```lua
if Lib.Client then
    print("The script is running on the client")
else
    print("The script is running on the server")
end
```

> For more examples and detailed information on client-side functionality, you can refer to the [PFE Client documentation](Pfe/Client.md)