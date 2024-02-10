# Using the Client Module
> The Client module provides a method for detecting whether the script is running on the client or the server. This can be useful for conditional behavior in your scripts. For example, you might want to execute different code based on whether the script is running on the client or server. Here's how you can use the Client module:
```lua
if Lib.Client then
    -- Code to execute if the script is running on the client
    print("Running on the client")
else
    -- Code to execute if the script is running on the server
    print("Running on the server")
end
```
> In this example, if Lib.Client is true, it means the script is running on the client, and if it's false, the script is running on the server. You can then write code specific to each case as needed.
