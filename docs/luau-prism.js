Prism.languages.luau = Prism.languages.extend('lua', {
    // Add Luau-specific syntax here
    'keyword': /\b(?:and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while|continue|typeof|export|import|try|catch|finally|debugger|throw|assert)\b/,
    'builtin': /\b(?:string|table|math|io|os|coroutine|debug|print|warn|delay|task|require)\b/,
    'type': /\b(?:boolean|number|string|table|function|thread|userdata|any|nil|never|unknown)\b/,
    'boolean': /\b(?:true|false|nil)\b/,
    'operator': /[-+*%^&|#]|\/\/?|<[=>]?|>[=]?|[=~]=?|::?|\.\.\.|\.\./,
    'number': /\b0x[\da-fA-F]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?\b/i,
    'string': {
        pattern: /(["'])(?:(?!\1)[^\\]|\\(?:\r\n|[\s\S]))*\1/,
        greedy: true
    },
    'comment': {
        pattern: /(--\[=*\[[\s\S]*?\]=*\]|\-\-.*)/,
        greedy: true
    }
});

// Register the Luau language
Prism.languages.insertBefore('luau', 'function', {
    'annotation': {
        pattern: /@[a-zA-Z_][\w]*/,
        alias: 'punctuation'
    }
});
