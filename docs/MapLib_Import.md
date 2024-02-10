# MapLib Import

This section provides instructions for importing MapLib, which allows you to choose between different MapLib options.

## Open Flood Test Lib Loader

Use the following code to import the Open Flood Test Lib:

> [Click here for more details](/openfloodtest/OpenFloodTest)

```lua
local Lib = workspace.Multiplayer.GetMapVals:Invoke() -- This function returns Map, Script, Button, and btnFuncs
Lib.Button:connect(function(p, bNo) if Lib.btnFuncs[bNo] then Lib.btnFuncs[bNo](bNo, p) end end)
```
## PFE Lib Loader
Use the following code to import the PFE Lib:
> [Click here for more details](Pfe/Main)
```lua
local Lib = game.GetPfeLib:Invoke("Latest") --Has: Map, Script, Button, btnFuncs
Lib.Button:connect(function(p, bNo) if Lib.btnFuncs[bNo] then Lib.btnFuncs[bNo](bNo, p) end end)
```
