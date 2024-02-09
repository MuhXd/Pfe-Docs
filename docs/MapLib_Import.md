# MapLib import
> to import a maplib you can pick between what maplib you would like to use
## This is a Open flood test lib loader [Click me to understand how to use](/openfloodtest/OpenFloodTest)
```lua
local Lib = workspace.Multiplayer.GetMapVals:Invoke() --Has: Map, Script, Button, btnFuncs
Lib.Button:connect(function(p, bNo) if Lib.btnFuncs[bNo] then Lib.btnFuncs[bNo](bNo, p) end end)
```

