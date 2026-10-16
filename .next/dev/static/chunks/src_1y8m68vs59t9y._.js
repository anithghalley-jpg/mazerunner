(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CodePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MazeCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MazeCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ControlPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ControlPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GuideTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GuideTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mazeGenerator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$defaultPythonCode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/defaultPythonCode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pyodideRunner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pyodideRunner.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    // Navigation: 'simulator' or 'guide'
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('simulator');
    // Layout mode: 'maze-left' (Maze on Left) or 'maze-right' (Maze on Right)
    const [layoutMode, setLayoutMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('maze-left');
    // Panel sizing: 'wide' (65/35), 'balanced' (50/50), 'focus-maze' (100% canvas)
    const [panelRatio, setPanelRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('wide');
    // Grid parameters
    const [gridWidth, setGridWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(11);
    const [gridHeight, setGridHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(11);
    const [braidRatio, setBraidRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.4);
    const [simulationSpeed, setSimulationSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    // Maze state
    const [mazeData, setMazeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Home.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateBraidedMaze"])(11, 11, 0.4)
    }["Home.useState"]);
    // Reset trigger key to force canvas robot repositioning
    const [resetKey, setResetKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Editor and simulation state
    const [pythonCode, setPythonCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$defaultPythonCode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PYTHON_CODE"]);
    const [isExecutingCode, setIsExecutingCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSimulating, setIsSimulating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [commands, setCommands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [visualizerData, setVisualizerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Telemetry stats
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        stepsTaken: 0,
        collisions: 0,
        status: 'idle',
        executionTimeMs: 0
    });
    // Append to console
    const addLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[addLog]": (message, type = 'info')=>{
            const now = new Date();
            const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
            setLogs({
                "Home.useCallback[addLog]": (prev)=>[
                        ...prev,
                        {
                            id: Math.random().toString(36).substring(2, 9),
                            type,
                            message,
                            timestamp: timeStr
                        }
                    ]
            }["Home.useCallback[addLog]"]);
        }
    }["Home.useCallback[addLog]"], []);
    // Clear console
    const handleClearLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleClearLogs]": ()=>{
            setLogs([]);
        }
    }["Home.useCallback[handleClearLogs]"], []);
    // Regenerate maze with walls
    const handleGenerateMaze = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleGenerateMaze]": ()=>{
            setIsSimulating(false);
            setCommands([]);
            setVisualizerData(null);
            const newMaze = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateBraidedMaze"])(gridWidth, gridHeight, braidRatio);
            setMazeData(newMaze);
            setResetKey({
                "Home.useCallback[handleGenerateMaze]": (prev)=>prev + 1
            }["Home.useCallback[handleGenerateMaze]"]);
            setStats({
                stepsTaken: 0,
                collisions: 0,
                status: 'idle',
                executionTimeMs: 0
            });
            addLog(`Generated new ${gridWidth}x${gridHeight} cell-based maze (Braid: ${Math.round(braidRatio * 100)}%). Ready.`, 'info');
        }
    }["Home.useCallback[handleGenerateMaze]"], [
        gridWidth,
        gridHeight,
        braidRatio,
        addLog
    ]);
    // Generate blank practice arena with zero internal walls
    const handleGenerateBlankArena = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleGenerateBlankArena]": ()=>{
            setIsSimulating(false);
            setCommands([]);
            setVisualizerData(null);
            const blankMaze = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateBlankArena"])(gridWidth, gridHeight);
            setMazeData(blankMaze);
            setResetKey({
                "Home.useCallback[handleGenerateBlankArena]": (prev)=>prev + 1
            }["Home.useCallback[handleGenerateBlankArena]"]);
            setStats({
                stepsTaken: 0,
                collisions: 0,
                status: 'idle',
                executionTimeMs: 0
            });
            addLog(`🏟️ Blank Practice Arena (${gridWidth}x${gridHeight}) loaded! Zero internal walls — safe for testing robot moves.`, 'info');
        }
    }["Home.useCallback[handleGenerateBlankArena]"], [
        gridWidth,
        gridHeight,
        addLog
    ]);
    // Handle grid size or braid changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            handleGenerateMaze();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Home.useEffect"], [
        gridWidth,
        gridHeight,
        braidRatio
    ]);
    // Reset robot position back to Start Cell (0, 0)
    const handleResetRobot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleResetRobot]": ()=>{
            setIsSimulating(false);
            setCommands([]);
            setResetKey({
                "Home.useCallback[handleResetRobot]": (prev)=>prev + 1
            }["Home.useCallback[handleResetRobot]"]);
            setStats({
                "Home.useCallback[handleResetRobot]": (prev)=>({
                        ...prev,
                        stepsTaken: 0,
                        status: 'idle'
                    })
            }["Home.useCallback[handleResetRobot]"]);
            addLog('Robot reset to center of Start Cell (0, 0) facing East.', 'info');
        }
    }["Home.useCallback[handleResetRobot]"], [
        addLog
    ]);
    // Handle algorithm preset load from Guide
    const handleLoadAlgorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleLoadAlgorithm]": (code, algoName)=>{
            setPythonCode(code);
            setActiveTab('simulator');
            setResetKey({
                "Home.useCallback[handleLoadAlgorithm]": (prev)=>prev + 1
            }["Home.useCallback[handleLoadAlgorithm]"]);
            addLog(`Loaded algorithm preset: "${algoName}". Ready to execute!`, 'info');
        }
    }["Home.useCallback[handleLoadAlgorithm]"], [
        addLog
    ]);
    // Run simulation
    const handleRunSimulation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleRunSimulation]": async ()=>{
            if (isExecutingCode || isSimulating) return;
            setIsExecutingCode(true);
            setCommands([]);
            setResetKey({
                "Home.useCallback[handleRunSimulation]": (prev)=>prev + 1
            }["Home.useCallback[handleRunSimulation]"]);
            setStats({
                "Home.useCallback[handleRunSimulation]": (prev)=>({
                        ...prev,
                        status: 'idle',
                        stepsTaken: 0
                    })
            }["Home.useCallback[handleRunSimulation]"]);
            addLog('Compiling Python solver in Pyodide WebAssembly...', 'info');
            const startTime = performance.now();
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pyodideRunner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executePythonSolver"])(pythonCode, mazeData, {
                "Home.useCallback[handleRunSimulation]": (msg, type)=>{
                    addLog(msg, type);
                }
            }["Home.useCallback[handleRunSimulation]"]);
            const elapsed = Math.round(performance.now() - startTime);
            setIsExecutingCode(false);
            if (!result.success) {
                setStats({
                    "Home.useCallback[handleRunSimulation]": (prev)=>({
                            ...prev,
                            status: 'stopped',
                            executionTimeMs: elapsed
                        })
                }["Home.useCallback[handleRunSimulation]"]);
                addLog(`Execution error: ${result.error}`, 'error');
                return;
            }
            if (result.commands.length === 0) {
                setStats({
                    "Home.useCallback[handleRunSimulation]": (prev)=>({
                            ...prev,
                            status: 'stopped',
                            executionTimeMs: elapsed
                        })
                }["Home.useCallback[handleRunSimulation]"]);
                addLog('solve() returned an empty list of commands.', 'warn');
                return;
            }
            addLog(`Computed ${result.commands.length} motor commands in ${elapsed}ms: [${result.commands.slice(0, 8).join(', ')}${result.commands.length > 8 ? '...' : ''}]. Navigating cells!`, 'success');
            setCommands(result.commands);
            if (result.visualizerData) {
                setVisualizerData(result.visualizerData);
            }
            setIsSimulating(true);
            setStats({
                "Home.useCallback[handleRunSimulation]": (prev)=>({
                        ...prev,
                        status: 'running',
                        executionTimeMs: elapsed
                    })
            }["Home.useCallback[handleRunSimulation]"]);
        }
    }["Home.useCallback[handleRunSimulation]"], [
        isExecutingCode,
        isSimulating,
        pythonCode,
        mazeData,
        addLog
    ]);
    // Stop simulation
    const handleStopSimulation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleStopSimulation]": ()=>{
            setIsSimulating(false);
            setStats({
                "Home.useCallback[handleStopSimulation]": (prev)=>({
                        ...prev,
                        status: 'stopped'
                    })
            }["Home.useCallback[handleStopSimulation]"]);
            addLog('Simulation stopped by user.', 'warn');
        }
    }["Home.useCallback[handleStopSimulation]"], [
        addLog
    ]);
    // Simulation finished
    const handleSimulationEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleSimulationEnd]": (status, steps)=>{
            setIsSimulating(false);
            setStats({
                "Home.useCallback[handleSimulationEnd]": (prev)=>({
                        ...prev,
                        status,
                        stepsTaken: steps
                    })
            }["Home.useCallback[handleSimulationEnd]"]);
            if (status === 'success') {
                addLog(`SUCCESS: Target cell [${mazeData.end_node.join(', ')}] reached successfully in ${steps} steps!`, 'success');
            } else if (status === 'collision') {
                addLog(`Simulation halted: Virtual wall collision (+5s penalty).`, 'error');
            } else {
                addLog(`Simulation ended after ${steps} steps.`, 'info');
            }
        }
    }["Home.useCallback[handleSimulationEnd]"], [
        mazeData,
        addLog
    ]);
    // Collision detected
    const handleCollision = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleCollision]": (node, heading)=>{
            setStats({
                "Home.useCallback[handleCollision]": (prev)=>({
                        ...prev,
                        collisions: prev.collisions + 1
                    })
            }["Home.useCallback[handleCollision]"]);
            addLog(`VIRTUAL COLLISION: +5s penalty at cell (${node[0]}, ${node[1]}) heading ${heading}!`, 'error');
        }
    }["Home.useCallback[handleCollision]"], [
        addLog
    ]);
    // Step progress
    const handleStepProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleStepProgress]": (step, _total, _robot)=>{
            setStats({
                "Home.useCallback[handleStepProgress]": (prev)=>({
                        ...prev,
                        stepsTaken: step
                    })
            }["Home.useCallback[handleStepProgress]"]);
        }
    }["Home.useCallback[handleStepProgress]"], []);
    // Compute Grid Columns based on panelRatio
    const getMazeColSpan = ()=>{
        if (panelRatio === 'focus-maze') return 'col-span-12';
        if (panelRatio === 'wide') return 'lg:col-span-7 xl:col-span-8';
        return 'lg:col-span-6'; // balanced
    };
    const getCodeColSpan = ()=>{
        if (panelRatio === 'focus-maze') return 'hidden';
        if (panelRatio === 'wide') return 'lg:col-span-5 xl:col-span-4';
        return 'lg:col-span-6'; // balanced
    };
    // Sections
    const mazeSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `flex flex-col h-full space-y-2 min-h-0 ${getMazeColSpan()}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-[260px] w-full relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MazeCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    mazeData: mazeData,
                    commands: commands,
                    isSimulating: isSimulating,
                    simulationSpeed: simulationSpeed,
                    resetKey: resetKey,
                    visualizerData: visualizerData,
                    onSimulationEnd: handleSimulationEnd,
                    onCollision: handleCollision,
                    onStepProgress: handleStepProgress
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ControlPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                gridWidth: gridWidth,
                gridHeight: gridHeight,
                braidRatio: braidRatio,
                simulationSpeed: simulationSpeed,
                stats: stats,
                onGridWidthChange: setGridWidth,
                onGridHeightChange: setGridHeight,
                onBraidRatioChange: setBraidRatio,
                onSimulationSpeedChange: setSimulationSpeed,
                onGenerateMaze: handleGenerateMaze,
                onGenerateBlankArena: handleGenerateBlankArena,
                onResetRobot: handleResetRobot,
                isSimulating: isSimulating
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
    const codeSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `flex flex-col h-full min-h-0 ${getCodeColSpan()}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            pythonCode: pythonCode,
            onCodeChange: setPythonCode,
            onRunSimulation: handleRunSimulation,
            onStopSimulation: handleStopSimulation,
            isExecutingCode: isExecutingCode,
            isSimulating: isSimulating,
            logs: logs,
            onClearLogs: handleClearLogs,
            onOpenGuide: ()=>setActiveTab('guide')
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 322,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen bg-[#0a0e17] text-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeTab: activeTab,
                onChangeTab: setActiveTab,
                layoutMode: layoutMode,
                onToggleLayout: ()=>setLayoutMode((prev)=>prev === 'maze-left' ? 'maze-right' : 'maze-left'),
                panelRatio: panelRatio,
                onChangePanelRatio: setPanelRatio
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            activeTab === 'guide' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-4 lg:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GuideTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onLoadAlgorithm: handleLoadAlgorithm,
                    onGoToSimulator: ()=>setActiveTab('simulator')
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 352,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 351,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-2.5 sm:p-3 flex flex-col max-w-[1920px] w-full mx-auto h-[calc(100vh-3.75rem)] overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3.5",
                    children: layoutMode === 'maze-left' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            mazeSection,
                            codeSection
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 362,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            codeSection,
                            mazeSection
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 367,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 360,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 358,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
_s(Home, "Z1TRj7lYs9qUNdkL3Y/qk9pwMo4=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CodePanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CodePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.mjs [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.mjs [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConsoleOutput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConsoleOutput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$defaultPythonCode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/defaultPythonCode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$algorithmPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/algorithmPresets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$beginnerLessons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/beginnerLessons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$monacoIntellisense$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/monacoIntellisense.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function CodePanel({ pythonCode, onCodeChange, onRunSimulation, onStopSimulation, isExecutingCode, isSimulating, logs, onClearLogs, onOpenGuide }) {
    _s();
    const [editorTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('vs-dark');
    const [predictionActive, setPredictionActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleResetToDefault = ()=>{
        if (confirm('Reset your Python editor to the default BFS template?')) {
            onCodeChange(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$defaultPythonCode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PYTHON_CODE"]);
        }
    };
    const handleSelectPreset = (e)=>{
        const selectedId = e.target.value;
        if (!selectedId) return;
        // Check beginner lessons
        const lessonFound = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$beginnerLessons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEGINNER_LESSONS"].find((l)=>l.id === selectedId);
        if (lessonFound) {
            if (confirm(`Load "${lessonFound.title}" into the editor?`)) {
                onCodeChange(lessonFound.code);
            }
            e.target.value = '';
            return;
        }
        // Check algorithms
        const algoFound = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$algorithmPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALGORITHM_PRESETS"].find((p)=>p.id === selectedId);
        if (algoFound) {
            if (confirm(`Load "${algoFound.name}" algorithm preset into the editor?`)) {
                onCodeChange(algoFound.code);
            }
        }
        e.target.value = '';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#111827] border border-slate-800 rounded-xl overflow-hidden shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2 px-3 sm:px-4 py-2.5 bg-slate-900 border-b border-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1 rounded bg-amber-500/10 text-amber-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodePanel.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-200 text-sm",
                                children: "solver.py"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-500 font-mono hidden sm:inline",
                                children: "(Python 3 WASM)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "btn-toggle-prediction",
                                onClick: ()=>setPredictionActive((prev)=>!prev),
                                title: predictionActive ? 'IntelliSense & Text Prediction active: suggestions appear as you type (Click to disable)' : 'Text Prediction disabled (Click to enable)',
                                className: `flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all cursor-pointer ${predictionActive ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 shadow-sm shadow-emerald-500/10' : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-750'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-1.5 h-1.5 rounded-full ${predictionActive ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: predictionActive ? 'Prediction: ON' : 'Prediction: OFF'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CodePanel.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "select-algorithm-preset",
                                defaultValue: "",
                                onChange: handleSelectPreset,
                                className: "bg-slate-950 border border-slate-800 rounded-md px-2 py-1 text-xs text-cyan-400 font-medium cursor-pointer focus:outline-none focus:border-cyan-500 max-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        disabled: true,
                                        children: "⚡ Load Preset / Lesson..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: "🐣 Python 101 Lessons",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$beginnerLessons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEGINNER_LESSONS"].map((lesson)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: lesson.id,
                                                className: "bg-slate-900 text-slate-200",
                                                children: lesson.title
                                            }, lesson.id, false, {
                                                fileName: "[project]/src/components/CodePanel.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: "🗺️ Pathfinding Algorithms",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$algorithmPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALGORITHM_PRESETS"].map((algo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: algo.id,
                                                className: "bg-slate-900 text-slate-200",
                                                children: [
                                                    algo.name,
                                                    " (",
                                                    algo.difficulty,
                                                    ")"
                                                ]
                                            }, algo.id, true, {
                                                fileName: "[project]/src/components/CodePanel.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "btn-reset-template",
                                onClick: handleResetToDefault,
                                title: "Reset code to default template",
                                className: "flex items-center gap-1 px-2 py-1 text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-md transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            onOpenGuide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "btn-open-guide",
                                onClick: onOpenGuide,
                                title: "Open learning academy and getting started guide",
                                className: "flex items-center gap-1 px-2.5 py-1 text-xs text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/60 rounded-md transition-colors border border-indigo-900/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Guide"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CodePanel.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CodePanel.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-[260px] relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    height: "100%",
                    language: "python",
                    theme: editorTheme,
                    value: pythonCode,
                    onChange: (val)=>onCodeChange(val || ''),
                    onMount: (editor, monaco)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$monacoIntellisense$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupMonacoIntelliSense"])(monaco);
                    },
                    options: {
                        minimap: {
                            enabled: false
                        },
                        fontSize: 13,
                        lineNumbers: 'on',
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        tabSize: 4,
                        wordWrap: 'on',
                        fontFamily: 'Fira Code, JetBrains Mono, Menlo, Monaco, Consolas, monospace',
                        padding: {
                            top: 12,
                            bottom: 12
                        },
                        renderLineHighlight: 'all',
                        // Active text prediction and IDE autocomplete settings
                        quickSuggestions: predictionActive ? {
                            other: true,
                            comments: true,
                            strings: true
                        } : false,
                        quickSuggestionsDelay: 10,
                        suggestOnTriggerCharacters: predictionActive,
                        acceptSuggestionOnEnter: 'on',
                        tabCompletion: 'on',
                        wordBasedSuggestions: predictionActive ? 'allDocuments' : 'off',
                        snippetSuggestions: 'top',
                        suggest: {
                            preview: predictionActive,
                            showWords: true,
                            showSnippets: true,
                            showFunctions: true,
                            showVariables: true,
                            showConstants: true,
                            showEnums: true,
                            showProperties: true,
                            showKeywords: true,
                            localityBonus: true,
                            shareSuggestSelections: true,
                            insertMode: 'insert'
                        },
                        inlineSuggest: {
                            enabled: predictionActive,
                            mode: 'prefix'
                        },
                        parameterHints: {
                            enabled: predictionActive,
                            cycle: true
                        },
                        suggestSelection: 'first'
                    },
                    loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-full text-slate-400 text-sm gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-4 h-4 animate-spin text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Loading Monaco Editor..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 215,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CodePanel.tsx",
                        lineNumber: 213,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CodePanel.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CodePanel.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: !isSimulating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: "btn-run-simulation",
                            onClick: onRunSimulation,
                            disabled: isExecutingCode,
                            className: "flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-medium text-sm shadow-lg shadow-emerald-500/20 active:scale-98 transition-all disabled:opacity-50 cursor-pointer",
                            children: isExecutingCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-4 h-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 233,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Compiling WASM..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 234,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 232,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-4 h-4 fill-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 238,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Run Simulation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 239,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 237,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodePanel.tsx",
                            lineNumber: 225,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: "btn-stop-simulation",
                            onClick: onStopSimulation,
                            className: "flex items-center gap-2 px-5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-medium text-sm shadow-lg shadow-rose-600/30 active:scale-98 transition-all cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                    className: "w-4 h-4 fill-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodePanel.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Stop Simulation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodePanel.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CodePanel.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CodePanel.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-xs text-slate-400",
                        children: [
                            predictionActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:flex items-center gap-1.5 text-[11px] text-emerald-400/90 font-mono bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "w-3 h-3 text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tab / ↵ to predict"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-3.5 h-3.5 text-cyan-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "WASM Sandbox"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePanel.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CodePanel.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CodePanel.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CodePanel.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 pt-0 bg-slate-900/90",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConsoleOutput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    logs: logs,
                    onClearLogs: onClearLogs
                }, void 0, false, {
                    fileName: "[project]/src/components/CodePanel.tsx",
                    lineNumber: 271,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CodePanel.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CodePanel.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(CodePanel, "ttc14ItXeBXWLb7QxxKQA2dnKXU=");
_c = CodePanel;
var _c;
__turbopack_context__.k.register(_c, "CodePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ConsoleOutput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsoleOutput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ConsoleOutput({ logs, onClearLogs }) {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsoleOutput.useEffect": ()=>{
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }
    }["ConsoleOutput.useEffect"], [
        logs
    ]);
    const getLogIcon = (type)=>{
        switch(type){
            case 'success':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ConsoleOutput.tsx",
                    lineNumber: 24,
                    columnNumber: 16
                }, this);
            case 'error':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                    className: "w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ConsoleOutput.tsx",
                    lineNumber: 26,
                    columnNumber: 16
                }, this);
            case 'warn':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ConsoleOutput.tsx",
                    lineNumber: 28,
                    columnNumber: 16
                }, this);
            case 'info':
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ConsoleOutput.tsx",
                    lineNumber: 31,
                    columnNumber: 16
                }, this);
        }
    };
    const getLogTextColor = (type)=>{
        switch(type){
            case 'success':
                return 'text-emerald-300';
            case 'error':
                return 'text-rose-300';
            case 'warn':
                return 'text-amber-300';
            case 'info':
            default:
                return 'text-slate-200';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-36 sm:h-40 bg-[#090d16] border border-slate-800 rounded-xl overflow-hidden shadow-inner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-3.5 py-2 bg-slate-900/80 border-b border-slate-800 text-xs text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                className: "w-3.5 h-3.5 text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConsoleOutput.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-300",
                                children: "Console & Pyodide Output"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConsoleOutput.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-slate-800 text-slate-400 text-[10px] px-1.5 py-0.5 rounded",
                                children: logs.length
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConsoleOutput.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConsoleOutput.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClearLogs,
                        title: "Clear console",
                        className: "flex items-center gap-1 hover:text-slate-200 text-slate-500 transition-colors cursor-pointer text-[11px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConsoleOutput.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConsoleOutput.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConsoleOutput.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConsoleOutput.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex-1 p-3 font-mono text-xs overflow-y-auto space-y-1.5 scroll-smooth",
                children: logs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-slate-600 italic py-6 text-center select-none",
                    children: 'Ready for execution. Click "Run Simulation" to execute your Python solver.'
                }, void 0, false, {
                    fileName: "[project]/src/components/ConsoleOutput.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this) : logs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-start gap-2 leading-relaxed ${getLogTextColor(log.type)}`,
                        children: [
                            getLogIcon(log.type),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500 text-[10px] select-none mt-0.5 shrink-0",
                                children: [
                                    "[",
                                    log.timestamp,
                                    "]"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ConsoleOutput.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "whitespace-pre-wrap font-mono break-all flex-1",
                                children: log.message
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConsoleOutput.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)
                        ]
                    }, log.id, true, {
                        fileName: "[project]/src/components/ConsoleOutput.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ConsoleOutput.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ConsoleOutput.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(ConsoleOutput, "P14GFulhWAl/Oec4Pk4QeBwKyr0=");
_c = ConsoleOutput;
var _c;
__turbopack_context__.k.register(_c, "ConsoleOutput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ControlPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ControlPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.mjs [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.mjs [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$dashed$2d$bottom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquareDashedBottom$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-dashed-bottom.mjs [app-client] (ecmascript) <export default as SquareDashedBottom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
'use client';
;
;
function ControlPanel({ gridWidth, gridHeight, braidRatio, simulationSpeed, stats, onGridWidthChange, onGridHeightChange, onBraidRatioChange, onSimulationSpeedChange, onGenerateMaze, onGenerateBlankArena, onResetRobot, isSimulating }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#111827] border border-slate-800 rounded-xl px-4 py-3 shadow-lg space-y-2.5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "btn-reset-position",
                                onClick: onResetRobot,
                                title: "Reset robot back to start cell (0, 0)",
                                className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "w-3.5 h-3.5 text-cyan-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Reset Position"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "btn-blank-arena",
                                onClick: onGenerateBlankArena,
                                disabled: isSimulating,
                                title: "Create an open arena with zero interior walls for practice",
                                className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/80 rounded-lg shadow-sm transition-all cursor-pointer disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$dashed$2d$bottom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquareDashedBottom$3e$__["SquareDashedBottom"], {
                                        className: "w-3.5 h-3.5 text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Blank Arena (No Walls)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "btn-generate-maze",
                                onClick: onGenerateMaze,
                                disabled: isSimulating,
                                className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-md shadow-cyan-600/20 active:scale-98 transition-all cursor-pointer disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Generate Maze"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ControlPanel.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                        className: "w-3.5 h-3.5 text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400 text-[11px]",
                                        children: "Size:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "input-grid-width",
                                        type: "number",
                                        min: 3,
                                        max: 25,
                                        value: gridWidth,
                                        disabled: isSimulating,
                                        onChange: (e)=>onGridWidthChange(Math.max(3, Math.min(25, parseInt(e.target.value) || 3))),
                                        className: "w-10 bg-slate-950 border border-slate-700 rounded px-1 py-0.5 text-cyan-400 font-mono text-center font-bold focus:outline-none focus:border-cyan-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500 font-mono",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "input-grid-height",
                                        type: "number",
                                        min: 3,
                                        max: 25,
                                        value: gridHeight,
                                        disabled: isSimulating,
                                        onChange: (e)=>onGridHeightChange(Math.max(3, Math.min(25, parseInt(e.target.value) || 3))),
                                        className: "w-10 bg-slate-950 border border-slate-700 rounded px-1 py-0.5 text-cyan-400 font-mono text-center font-bold focus:outline-none focus:border-cyan-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400 text-[11px]",
                                        children: "Braid:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "slider-braid-ratio",
                                        type: "range",
                                        min: 0,
                                        max: 1,
                                        step: 0.05,
                                        value: braidRatio,
                                        disabled: isSimulating,
                                        onChange: (e)=>onBraidRatioChange(parseFloat(e.target.value)),
                                        className: "w-16 sm:w-20 accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-cyan-400 text-[11px] font-semibold min-w-8",
                                        children: [
                                            Math.round(braidRatio * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                                        className: "w-3.5 h-3.5 text-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400 text-[11px]",
                                        children: "Speed:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "slider-simulation-speed",
                                        type: "range",
                                        min: 1,
                                        max: 10,
                                        step: 1,
                                        value: simulationSpeed,
                                        onChange: (e)=>onSimulationSpeedChange(parseInt(e.target.value)),
                                        className: "w-16 sm:w-20 accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-amber-400 text-[11px] font-semibold min-w-6",
                                        children: [
                                            simulationSpeed,
                                            "x"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ControlPanel.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ControlPanel.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500",
                                        children: "Status:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    stats.status === 'running' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1 text-cyan-400 font-semibold animate-pulse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-cyan-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ControlPanel.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            "Navigating Maze..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    stats.status === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1 text-emerald-400 font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ControlPanel.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this),
                                            "Target Reached!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    stats.status === 'collision' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1 text-rose-400 font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ControlPanel.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            "Collision (+5s)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    stats.status === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400 font-medium",
                                        children: "Ready"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    stats.status === 'stopped' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-amber-400 font-medium",
                                        children: "Stopped"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500",
                                        children: "Steps:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono font-bold text-slate-200",
                                        children: stats.stepsTaken
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500",
                                        children: "Collisions:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-mono font-bold ${stats.collisions > 0 ? 'text-rose-400' : 'text-slate-200'}`,
                                        children: stats.collisions
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ControlPanel.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] text-slate-500 font-mono hidden md:block",
                        children: [
                            "Cell-based rover coordinates: (0,0) → (",
                            gridWidth - 1,
                            ",",
                            gridHeight - 1,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ControlPanel.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ControlPanel.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ControlPanel.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = ControlPanel;
var _c;
__turbopack_context__.k.register(_c, "ControlPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GuideTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GuideTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-bookmark.mjs [app-client] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Binary$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/binary.mjs [app-client] (ecmascript) <export default as Binary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.mjs [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$algorithmPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/algorithmPresets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$beginnerLessons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/beginnerLessons.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function GuideTab({ onLoadAlgorithm, onGoToSimulator }) {
    _s();
    // Sub-track navigation inside Guide
    const [activeTrack, setActiveTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('python-basics');
    const [selectedAlgo, setSelectedAlgo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$algorithmPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALGORITHM_PRESETS"][0]);
    const [selectedLesson, setSelectedLesson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$beginnerLessons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEGINNER_LESSONS"][0]);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Interactive Bitwise Demo state
    const [bitNorth, setBitNorth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bitEast, setBitEast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bitSouth, setBitSouth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bitWest, setBitWest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const calculatedBitmask = (bitNorth ? 1 : 0) | (bitEast ? 2 : 0) | (bitSouth ? 4 : 0) | (bitWest ? 8 : 0);
    const handleCopyCode = (code)=>{
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[1400px] mx-auto px-4 py-6 space-y-8 text-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-950/70 via-slate-900 to-indigo-950/70 border border-slate-800 p-6 sm:p-8 shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 max-w-3xl space-y-3 sm:space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GuideTab.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Robotics & Python Learning Academy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GuideTab.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GuideTab.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl sm:text-4xl font-extrabold text-white tracking-tight",
                            children: "Learn Python & Autonomous Maze Solving"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GuideTab.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-300 text-xs sm:text-base leading-relaxed",
                            children: "Never coded in Python before? Start with simple robot commands, learn loops and lists, decode virtual walls, and build up to professional shortest-path algorithms like BFS and A*."
                        }, void 0, false, {
                            fileName: "[project]/src/components/GuideTab.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3 pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onGoToSimulator,
                                className: "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-600/30 transition-all cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-4 h-4 fill-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Launch Simulator Workbench"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/GuideTab.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GuideTab.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/GuideTab.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 p-1.5 bg-[#111827] border border-slate-800 rounded-2xl text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTrack('python-basics'),
                        className: `flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${activeTrack === 'python-basics' ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md shadow-cyan-600/20' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "1. Python Fundamentals (Beginners)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTrack('bitwise-grid'),
                        className: `flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${activeTrack === 'bitwise-grid' ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/20' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Binary$3e$__["Binary"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "2. Virtual Walls & Bitwise Math"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTrack('algorithms'),
                        className: `flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${activeTrack === 'algorithms' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "3. Pathfinding Algorithms (BFS, A*, DFS)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTrack('rules'),
                        className: `flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${activeTrack === 'rules' ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md shadow-amber-600/20' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "4. Motor Commands & Scoring Rules"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GuideTab.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            activeTrack === 'python-basics' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8 animate-fadeIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-cyan-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-white",
                                        children: "How Python Controls the Robot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-slate-300 leading-relaxed",
                                children: [
                                    "In this simulator, your Python script runs inside your browser using WebAssembly. The simulator looks for a function named ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "text-amber-300 font-mono",
                                        children: "solve()"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 148,
                                        columnNumber: 52
                                    }, this),
                                    ". Whatever list of commands ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "text-amber-300 font-mono",
                                        children: "solve()"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 149,
                                        columnNumber: 41
                                    }, this),
                                    " returns, the simulator executes sequentially on the robot."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-emerald-400",
                                                children: "1. Functions (`def`)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "text-slate-200 font-mono",
                                                        children: "def solve():"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this),
                                                    " defines the entrypoint. Everything indented beneath it is executed."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-cyan-400",
                                                children: "2. Lists (`[...]`)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400",
                                                children: [
                                                    "Commands are stored in a list: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "text-slate-200 font-mono",
                                                        children: "['FORWARD', 'LEFT']"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 50
                                                    }, this),
                                                    ". Use ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "text-slate-200 font-mono",
                                                        children: ".append()"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 145
                                                    }, this),
                                                    " to add steps."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-amber-400",
                                                children: "3. Return Value"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "text-slate-200 font-mono",
                                                        children: "return commands"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, this),
                                                    " sends the list to the robotics animation engine."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-bold text-white flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"], {
                                                    className: "w-4 h-4 text-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GuideTab.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Step-by-Step Beginner Lessons"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GuideTab.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/GuideTab.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 mt-0.5",
                                            children: "Click a lesson to inspect the Python code, or load it into the editor to run it live."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GuideTab.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GuideTab.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$beginnerLessons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEGINNER_LESSONS"].map((lesson)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedLesson(lesson),
                                        className: `p-3.5 rounded-xl border text-left transition-all cursor-pointer ${selectedLesson.id === lesson.id ? 'bg-cyan-950/60 border-cyan-500 shadow-md shadow-cyan-500/10 text-white' : 'bg-[#111827] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-mono text-cyan-400 font-semibold mb-1",
                                                children: lesson.level
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-xs text-slate-100",
                                                children: lesson.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-slate-400 mt-1 line-clamp-2",
                                                children: lesson.objective
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, lesson.id, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-5 p-6 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-block text-[10px] font-mono uppercase bg-cyan-950 text-cyan-400 border border-cyan-800 px-2 py-0.5 rounded-full font-semibold",
                                                        children: selectedLesson.level
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-bold text-white",
                                                        children: selectedLesson.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-cyan-400",
                                                                children: "Goal: "
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 21
                                                            }, this),
                                                            selectedLesson.objective
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-400 leading-relaxed",
                                                        children: selectedLesson.explanation
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        onLoadAlgorithm(selectedLesson.code, selectedLesson.title);
                                                        onGoToSimulator();
                                                    },
                                                    className: "w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-semibold text-xs shadow-lg shadow-cyan-600/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                            className: "w-4 h-4 fill-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GuideTab.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Load Lesson into Editor & Run"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GuideTab.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GuideTab.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-7 bg-[#090d16] flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-cyan-400",
                                                        children: "beginner_lesson.py"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleCopyCode(selectedLesson.code),
                                                        className: "flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[11px]",
                                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "w-3.5 h-3.5 text-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GuideTab.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-emerald-400",
                                                                    children: "Copied!"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GuideTab.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GuideTab.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GuideTab.tsx",
                                                                    lineNumber: 259,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Copy Code"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GuideTab.tsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GuideTab.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                className: "flex-1 p-4 font-mono text-xs text-slate-300 overflow-x-auto max-h-[420px] leading-relaxed",
                                                children: selectedLesson.code
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GuideTab.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this),
            activeTrack === 'bitwise-grid' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8 animate-fadeIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-indigo-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Binary$3e$__["Binary"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-bold text-white",
                                                children: "Why Bitwise? (1, 2, 4, 8)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-slate-300 leading-relaxed",
                                        children: "In robotics competitions, memory efficiency is critical. Instead of storing 4 booleans (north=true, east=false, etc.), we encode all 4 walls into a single integer using powers of 2."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-xl bg-[#090d16] border border-slate-800 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-rose-400 font-bold text-sm",
                                                children: "Value: 1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-300 font-sans font-medium",
                                                children: "NORTH Wall"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-500 text-[10px]",
                                                children: "Binary: 0001 (y - 1)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-xl bg-[#090d16] border border-slate-800 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-rose-400 font-bold text-sm",
                                                children: "Value: 2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-300 font-sans font-medium",
                                                children: "EAST Wall"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-500 text-[10px]",
                                                children: "Binary: 0010 (x + 1)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-xl bg-[#090d16] border border-slate-800 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-rose-400 font-bold text-sm",
                                                children: "Value: 4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 305,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-300 font-sans font-medium",
                                                children: "SOUTH Wall"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 306,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-500 text-[10px]",
                                                children: "Binary: 0100 (y + 1)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-xl bg-[#090d16] border border-slate-800 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-rose-400 font-bold text-sm",
                                                children: "Value: 8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 311,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-300 font-sans font-medium",
                                                children: "WEST Wall"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-500 text-[10px]",
                                                children: "Binary: 1000 (x - 1)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-cyan-400 font-bold font-sans text-sm",
                                        children: "How does the Bitwise AND (&) Operator work in Python?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 font-sans text-xs",
                                        children: [
                                            "Think of ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "text-amber-300",
                                                children: "&"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 323,
                                                columnNumber: 26
                                            }, this),
                                            ' as asking: "Is this specific wall bit active?"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "text-[11px] text-slate-300 whitespace-pre-wrap bg-slate-950 p-3 rounded-lg border border-slate-800",
                                        children: `# Suppose current cell integer is 5 (North + South = 1 + 4 = 5)
walls = 5

print(walls & 1)  # Output: 1  -> NORTH wall is PRESENT!
print(walls & 2)  # Output: 0  -> EAST wall is OPEN! Safe to drive East!
print(walls & 4)  # Output: 4  -> SOUTH wall is PRESENT!
print(walls & 8)  # Output: 0  -> WEST wall is OPEN!`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-slate-800 pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-white",
                                        children: "Interactive Bitwise Cell Playground"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800 font-bold",
                                        children: [
                                            "Computed Integer = ",
                                            calculatedBitmask
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "Toggle the walls below to see how the bitmask integer changes:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:bg-slate-850",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: bitNorth,
                                                                onChange: (e)=>setBitNorth(e.target.checked),
                                                                className: "accent-rose-500 w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-slate-200",
                                                                children: "North Wall (1)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:bg-slate-850",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: bitEast,
                                                                onChange: (e)=>setBitEast(e.target.checked),
                                                                className: "accent-rose-500 w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-slate-200",
                                                                children: "East Wall (2)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:bg-slate-850",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: bitSouth,
                                                                onChange: (e)=>setBitSouth(e.target.checked),
                                                                className: "accent-rose-500 w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-slate-200",
                                                                children: "South Wall (4)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:bg-slate-850",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: bitWest,
                                                                onChange: (e)=>setBitWest(e.target.checked),
                                                                className: "accent-rose-500 w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-slate-200",
                                                                children: "West Wall (8)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-44 h-44 mx-auto border border-dashed border-slate-700 rounded-xl flex items-center justify-center bg-[#090d16]",
                                        children: [
                                            bitNorth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 inset-x-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 395,
                                                columnNumber: 19
                                            }, this),
                                            bitSouth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 inset-x-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 398,
                                                columnNumber: 19
                                            }, this),
                                            bitWest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 inset-y-2 w-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 401,
                                                columnNumber: 19
                                            }, this),
                                            bitEast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 inset-y-2 w-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 404,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-lg bg-sky-600 border border-sky-400 flex items-center justify-center shadow-lg text-white font-mono font-bold text-xs",
                                                        children: "🤖"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-mono text-slate-400",
                                                        children: "Inside Cell"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 407,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GuideTab.tsx",
                lineNumber: 276,
                columnNumber: 9
            }, this),
            activeTrack === 'algorithms' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 animate-fadeIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                        className: "w-5 h-5 text-purple-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-white tracking-tight",
                                        children: "Pathfinding Evolution: From Reflexes to Optimal Search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 425,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 mt-1",
                                children: 'Select an algorithm below to learn its mental model and click "Load & Test in Simulator" to execute it.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 bg-gradient-to-r from-purple-950/50 via-slate-900 to-amber-950/40 border border-purple-900/40 rounded-xl flex items-center justify-between text-xs text-slate-300 shadow-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                    className: "w-4 h-4 text-cyan-400 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GuideTab.tsx",
                                    lineNumber: 437,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-white",
                                            children: "Algorithm Visualizer Live Mode:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GuideTab.tsx",
                                            lineNumber: 439,
                                            columnNumber: 17
                                        }, this),
                                        " In the simulator canvas, use the top toggles for ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-cyan-400 font-semibold",
                                            children: "Path Flow (Direction Arrows)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GuideTab.tsx",
                                            lineNumber: 439,
                                            columnNumber: 138
                                        }, this),
                                        ", ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-purple-400 font-semibold",
                                            children: "Explored Tree (# order)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GuideTab.tsx",
                                            lineNumber: 439,
                                            columnNumber: 221
                                        }, this),
                                        ", and ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-400 font-semibold",
                                            children: "Weights (f/g/h costs)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GuideTab.tsx",
                                            lineNumber: 439,
                                            columnNumber: 305
                                        }, this),
                                        " to watch how each algorithm develops its path and evaluates graph nodes!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GuideTab.tsx",
                                    lineNumber: 438,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GuideTab.tsx",
                            lineNumber: 436,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 435,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 border-b border-slate-800 pb-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$algorithmPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALGORITHM_PRESETS"].map((algo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedAlgo(algo),
                                className: `flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${selectedAlgo.id === algo.id ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30' : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: algo.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 456,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] px-1.5 py-0.5 rounded bg-black/40",
                                        children: algo.difficulty
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 457,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, algo.id, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 447,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 p-6 space-y-5 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono uppercase bg-purple-950 text-purple-400 border border-purple-800 px-2 py-0.5 rounded-full font-bold",
                                                                children: selectedAlgo.difficulty
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-slate-400 font-mono",
                                                                children: selectedAlgo.complexity
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                                lineNumber: 473,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-white",
                                                        children: selectedAlgo.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 468,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-300 leading-relaxed",
                                                children: selectedAlgo.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 478,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs font-semibold text-slate-200 uppercase tracking-wider",
                                                        children: "Why This Matters"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1.5 text-xs text-slate-400",
                                                        children: selectedAlgo.keyFeatures.map((feat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: "w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                                        lineNumber: 489,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: feat
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                                        lineNumber: 490,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                                lineNumber: 488,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GuideTab.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 482,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onLoadAlgorithm(selectedAlgo.code, selectedAlgo.name);
                                                onGoToSimulator();
                                            },
                                            className: "w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "w-4 h-4 fill-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GuideTab.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Load Algorithm into Simulator"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GuideTab.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/GuideTab.tsx",
                                            lineNumber: 498,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 497,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 bg-[#090d16] flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-purple-400",
                                                children: [
                                                    selectedAlgo.id,
                                                    "_solver.py"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleCopyCode(selectedAlgo.code),
                                                className: "flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[11px]",
                                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-3.5 h-3.5 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GuideTab.tsx",
                                                            lineNumber: 520,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-emerald-400",
                                                            children: "Copied!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GuideTab.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GuideTab.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GuideTab.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Copy Code"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GuideTab.tsx",
                                                            lineNumber: 526,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GuideTab.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GuideTab.tsx",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 512,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "flex-1 p-4 font-mono text-xs text-slate-300 overflow-x-auto max-h-[460px] leading-relaxed",
                                        children: selectedAlgo.code
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 511,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 465,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GuideTab.tsx",
                lineNumber: 421,
                columnNumber: 9
            }, this),
            activeTrack === 'rules' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 animate-fadeIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        className: "w-5 h-5 text-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 544,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-white tracking-tight",
                                        children: "Robotics Rules & Motor Output"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 545,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 543,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 mt-1",
                                children: "Your algorithm must guide the robot from cell (0, 0) to the goal cell using these 4 actions:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 549,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 542,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#111827] border border-slate-800 rounded-xl p-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-emerald-400 font-bold text-sm",
                                        children: "'FORWARD'"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 556,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 font-sans text-xs",
                                        children: "Moves from current cell into the next cell along current heading."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 557,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-rose-400",
                                        children: "💥 Causes collision if a wall is in front"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 560,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 555,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#111827] border border-slate-800 rounded-xl p-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-indigo-400 font-bold text-sm",
                                        children: "'LEFT'"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 564,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 font-sans text-xs",
                                        children: "Pivots 90° counter-clockwise inside the cell without changing position."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-slate-500",
                                        children: "e.g. East → North → West → South"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 568,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 563,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#111827] border border-slate-800 rounded-xl p-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-indigo-400 font-bold text-sm",
                                        children: "'RIGHT'"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 572,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 font-sans text-xs",
                                        children: "Pivots 90° clockwise inside the cell without changing position."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 573,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-slate-500",
                                        children: "e.g. East → South → West → North"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 576,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 571,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#111827] border border-slate-800 rounded-xl p-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-amber-400 font-bold text-sm",
                                        children: "'U_TURN'"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 580,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 font-sans text-xs",
                                        children: "Turns 180° in place inside the cell. Essential for escaping dead ends."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 581,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-slate-500",
                                        children: "e.g. East ↔ West, North ↔ South"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 584,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 579,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 554,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                        className: "w-4 h-4 text-rose-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 590,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Collision Penalties & Scoring"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 591,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 589,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 leading-relaxed",
                                children: [
                                    "If the robot issues a ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "text-emerald-400 font-mono",
                                        children: "'FORWARD'"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 594,
                                        columnNumber: 37
                                    }, this),
                                    " command while facing a virtual wall, the robot stops, the screen flashes red, and a",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-rose-400 font-bold",
                                        children: "+5.0 second penalty"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GuideTab.tsx",
                                        lineNumber: 596,
                                        columnNumber: 15
                                    }, this),
                                    " is added to the competition score. Always check the bitwise wall mask before driving forward!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GuideTab.tsx",
                                lineNumber: 593,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GuideTab.tsx",
                        lineNumber: 588,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GuideTab.tsx",
                lineNumber: 541,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GuideTab.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(GuideTab, "RGHpiVLCEQV7ntbBm+4yqcmNJ2I=");
_c = GuideTab;
var _c;
__turbopack_context__.k.register(_c, "GuideTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MazeCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MazeCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mazeGenerator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$algorithmVisualizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/algorithmVisualizer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.mjs [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.mjs [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const HEADING_ANGLES = {
    E: 0,
    S: Math.PI / 2,
    W: Math.PI,
    N: 3 * Math.PI / 2
};
const HEADING_DELTAS = {
    N: {
        dx: 0,
        dy: -1,
        wall: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALL_NORTH"]
    },
    E: {
        dx: 1,
        dy: 0,
        wall: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALL_EAST"]
    },
    S: {
        dx: 0,
        dy: 1,
        wall: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALL_SOUTH"]
    },
    W: {
        dx: -1,
        dy: 0,
        wall: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALL_WEST"]
    }
};
function drawDirectionVector(ctx, cx, cy, heading, cellSize, isSolution) {
    ctx.save();
    ctx.translate(cx, cy);
    let angle = 0;
    if (heading === 'E') angle = 0;
    else if (heading === 'S') angle = Math.PI / 2;
    else if (heading === 'W') angle = Math.PI;
    else if (heading === 'N') angle = -Math.PI / 2;
    ctx.rotate(angle);
    const len = Math.max(7, cellSize * 0.26);
    const headW = len * 0.45;
    if (isSolution) {
        // Solution path: Neon glowing cyan directional arrow
        ctx.shadowColor = 'rgba(6, 182, 212, 0.7)';
        ctx.shadowBlur = 4;
        ctx.strokeStyle = '#06b6d4';
        ctx.fillStyle = '#06b6d4';
        ctx.lineWidth = Math.max(2, cellSize * 0.055);
        // Arrow stem
        ctx.beginPath();
        ctx.moveTo(-len * 0.6, 0);
        ctx.lineTo(len * 0.45, 0);
        ctx.stroke();
        // Arrow arrowhead
        ctx.beginPath();
        ctx.moveTo(len * 0.65, 0);
        ctx.lineTo(len * 0.15, -headW);
        ctx.lineTo(len * 0.28, 0);
        ctx.lineTo(len * 0.15, headW);
        ctx.closePath();
        ctx.fill();
    } else {
        // Branch node: Subtle violet chevron
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.6)';
        ctx.fillStyle = 'rgba(168, 85, 247, 0.6)';
        ctx.lineWidth = Math.max(1.5, cellSize * 0.04);
        ctx.beginPath();
        ctx.moveTo(-len * 0.4, 0);
        ctx.lineTo(len * 0.35, 0);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(len * 0.5, 0);
        ctx.lineTo(len * 0.1, -headW * 0.8);
        ctx.lineTo(len * 0.1, headW * 0.8);
        ctx.closePath();
        ctx.fill();
    }
    ctx.restore();
}
function MazeCanvas({ mazeData, commands, isSimulating, simulationSpeed, resetKey, visualizerData, onSimulationEnd, onCollision, onStepProgress }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Algorithm Visualizer Toggles (Direction & Weight indicators default false to keep biological slime mold organic & uncluttered)
    const [showDirections, setShowDirections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showExplored, setShowExplored] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showWeights, setShowWeights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Slime mold growth animation state
    const [growthProgress, setGrowthProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.01);
    const growthProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0.01);
    const [isGrowing, setIsGrowing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [growthSpeed, setGrowthSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1); // 0.5x, 1x, 2x
    const growthAnimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const drawSceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "MazeCanvas.useRef[drawSceneRef]": ()=>{}
    }["MazeCanvas.useRef[drawSceneRef]"]);
    // Master Visualizer On/Off state (controlled via eyeball logo)
    const [isVisualizerEnabled, setIsVisualizerEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Top-left corner hover panel state
    const [isVisualizerExpanded, setIsVisualizerExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const visualizerHoverTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleVisualizerMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazeCanvas.useCallback[handleVisualizerMouseEnter]": ()=>{
            if (visualizerHoverTimeoutRef.current) {
                clearTimeout(visualizerHoverTimeoutRef.current);
                visualizerHoverTimeoutRef.current = null;
            }
            setIsVisualizerExpanded(true);
        }
    }["MazeCanvas.useCallback[handleVisualizerMouseEnter]"], []);
    const handleVisualizerMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazeCanvas.useCallback[handleVisualizerMouseLeave]": ()=>{
            visualizerHoverTimeoutRef.current = setTimeout({
                "MazeCanvas.useCallback[handleVisualizerMouseLeave]": ()=>{
                    setIsVisualizerExpanded(false);
                }
            }["MazeCanvas.useCallback[handleVisualizerMouseLeave]"], 280);
        }
    }["MazeCanvas.useCallback[handleVisualizerMouseLeave]"], []);
    // Compute effective visualizer data (from prop or on-the-fly traced from commands)
    const effectiveVisualizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MazeCanvas.useMemo[effectiveVisualizer]": ()=>{
            if (visualizerData && Object.keys(visualizerData.nodes).length > 0) {
                return visualizerData;
            }
            if (commands && commands.length > 0) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$algorithmVisualizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractAlgorithmVisualizerData"])(null, '', commands, mazeData);
            }
            return null;
        }
    }["MazeCanvas.useMemo[effectiveVisualizer]"], [
        visualizerData,
        commands,
        mazeData
    ]);
    const effectiveVisualizerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(effectiveVisualizer);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MazeCanvas.useEffect": ()=>{
            effectiveVisualizerRef.current = effectiveVisualizer;
        }
    }["MazeCanvas.useEffect"], [
        effectiveVisualizer
    ]);
    // Play/Resume Slime Mold Growth animation (smooth, deliberate biological expansion)
    const playGrowthAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazeCanvas.useCallback[playGrowthAnimation]": (resumeCurrent = false)=>{
            const viz = effectiveVisualizerRef.current;
            if (!viz || !viz.explorationSteps?.length) return;
            if (growthAnimRef.current) {
                cancelAnimationFrame(growthAnimRef.current);
                growthAnimRef.current = null;
            }
            // If resuming and not at the very end, continue from current progress; otherwise restart from 2%
            const startP = resumeCurrent && growthProgressRef.current < 0.98 ? growthProgressRef.current : 0.02;
            growthProgressRef.current = startP;
            setGrowthProgress(startP);
            setIsGrowing(true);
            const startTime = performance.now();
            // Total duration for full 0 -> 1 growth: 4200ms at 1x speed (smooth and clear)
            const totalDuration = 4200 / growthSpeed;
            const remainingDuration = Math.max(200, totalDuration * (1 - startP));
            const stepAnim = {
                "MazeCanvas.useCallback[playGrowthAnimation].stepAnim": (now)=>{
                    const elapsed = now - startTime;
                    const fraction = Math.min(1, elapsed / remainingDuration);
                    const p = startP + fraction * (1 - startP);
                    growthProgressRef.current = p;
                    drawSceneRef.current();
                    if (fraction < 1) {
                        growthAnimRef.current = requestAnimationFrame(stepAnim);
                    } else {
                        setIsGrowing(false);
                        growthProgressRef.current = 1;
                        setGrowthProgress(1);
                        growthAnimRef.current = null;
                        drawSceneRef.current();
                    }
                }
            }["MazeCanvas.useCallback[playGrowthAnimation].stepAnim"];
            growthAnimRef.current = requestAnimationFrame(stepAnim);
        }
    }["MazeCanvas.useCallback[playGrowthAnimation]"], [
        growthSpeed
    ]);
    // Pause Slime Mold Growth animation
    const pauseGrowthAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazeCanvas.useCallback[pauseGrowthAnimation]": ()=>{
            setIsGrowing(false);
            if (growthAnimRef.current) {
                cancelAnimationFrame(growthAnimRef.current);
                growthAnimRef.current = null;
            }
        }
    }["MazeCanvas.useCallback[pauseGrowthAnimation]"], []);
    // Scrub through growth process manually via slider
    const handleScrubberChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazeCanvas.useCallback[handleScrubberChange]": (newVal)=>{
            if (growthAnimRef.current) {
                cancelAnimationFrame(growthAnimRef.current);
                growthAnimRef.current = null;
            }
            setIsGrowing(false);
            const clamped = Math.max(0.01, Math.min(1, newVal));
            growthProgressRef.current = clamped;
            setGrowthProgress(clamped);
            drawSceneRef.current();
        }
    }["MazeCanvas.useCallback[handleScrubberChange]"], []);
    // Cycle speed between 0.5x, 1x, 2x
    const cycleSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazeCanvas.useCallback[cycleSpeed]": ()=>{
            setGrowthSpeed({
                "MazeCanvas.useCallback[cycleSpeed]": (s)=>s === 0.5 ? 1 : s === 1 ? 2 : 0.5
            }["MazeCanvas.useCallback[cycleSpeed]"]);
        }
    }["MazeCanvas.useCallback[cycleSpeed]"], []);
    const handleToggleExplored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazeCanvas.useCallback[handleToggleExplored]": ()=>{
            setShowExplored({
                "MazeCanvas.useCallback[handleToggleExplored]": (prev)=>{
                    const next = !prev;
                    if (next) {
                        setTimeout({
                            "MazeCanvas.useCallback[handleToggleExplored]": ()=>playGrowthAnimation(false)
                        }["MazeCanvas.useCallback[handleToggleExplored]"], 30);
                    }
                    return next;
                }
            }["MazeCanvas.useCallback[handleToggleExplored]"]);
        }
    }["MazeCanvas.useCallback[handleToggleExplored]"], [
        playGrowthAnimation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MazeCanvas.useEffect": ()=>{
            return ({
                "MazeCanvas.useEffect": ()=>{
                    if (growthAnimRef.current) {
                        cancelAnimationFrame(growthAnimRef.current);
                        growthAnimRef.current = null;
                    }
                    if (visualizerHoverTimeoutRef.current) {
                        clearTimeout(visualizerHoverTimeoutRef.current);
                    }
                }
            })["MazeCanvas.useEffect"];
        }
    }["MazeCanvas.useEffect"], []);
    // Robot dynamic state for rendering & simulation
    const robotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: mazeData.start_node[0],
        y: mazeData.start_node[1],
        heading: 'E',
        angle: 0,
        screenX: null,
        screenY: null,
        trail: [
            [
                mazeData.start_node[0],
                mazeData.start_node[1]
            ]
        ]
    });
    const [collisionFlash, setCollisionFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Execution tracking refs to guarantee single execution thread
    const runIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const animFrameIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Calculate cell-based geometry:
    // There are cols cells horizontally and rows cells vertically.
    // The robot sits INSIDE the cell at center: (left + cellSize/2, top + cellSize/2).
    const getCellGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazeCanvas.useCallback[getCellGeometry]": (cssWidth, cssHeight)=>{
            const cols = mazeData.width;
            const rows = mazeData.height;
            // Safe outer padding around the maze perimeter
            const padding = 24;
            const availW = Math.max(80, cssWidth - padding * 2);
            const availH = Math.max(80, cssHeight - padding * 2);
            // Sizing square cells
            const cellW = availW / cols;
            const cellH = availH / rows;
            const cellSize = Math.floor(Math.min(cellW, cellH));
            const totalGridW = cellSize * cols;
            const totalGridH = cellSize * rows;
            const offsetX = Math.floor((cssWidth - totalGridW) / 2);
            const offsetY = Math.floor((cssHeight - totalGridH) / 2);
            // Returns the pixel bounding box for cell (cx, cy)
            const getCellBounds = {
                "MazeCanvas.useCallback[getCellGeometry].getCellBounds": (cx, cy)=>{
                    const left = offsetX + cx * cellSize;
                    const top = offsetY + cy * cellSize;
                    return {
                        left,
                        top,
                        right: left + cellSize,
                        bottom: top + cellSize,
                        centerX: left + cellSize / 2,
                        centerY: top + cellSize / 2,
                        size: cellSize
                    };
                }
            }["MazeCanvas.useCallback[getCellGeometry].getCellBounds"];
            return {
                cellSize,
                offsetX,
                offsetY,
                getCellBounds,
                totalGridW,
                totalGridH
            };
        }
    }["MazeCanvas.useCallback[getCellGeometry]"], [
        mazeData
    ]);
    // Draw full scene on canvas
    const drawScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazeCanvas.useCallback[drawScene]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            const cssWidth = Math.floor(rect.width) || canvas.clientWidth || 500;
            const cssHeight = Math.floor(rect.height) || canvas.clientHeight || 500;
            const targetW = Math.floor(cssWidth * dpr);
            const targetH = Math.floor(cssHeight * dpr);
            if (canvas.width !== targetW || canvas.height !== targetH) {
                canvas.width = targetW;
                canvas.height = targetH;
            }
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            // Canvas background
            ctx.clearRect(0, 0, cssWidth, cssHeight);
            ctx.fillStyle = '#080d1a';
            ctx.fillRect(0, 0, cssWidth, cssHeight);
            const cols = mazeData.width;
            const rows = mazeData.height;
            const { cellSize, getCellBounds, offsetX, offsetY, totalGridW, totalGridH } = getCellGeometry(cssWidth, cssHeight);
            // 1. Draw Cell Floors and Grid Separators
            for(let y = 0; y < rows; y++){
                for(let x = 0; x < cols; x++){
                    const b = getCellBounds(x, y);
                    // Floor tile
                    ctx.fillStyle = (x + y) % 2 === 0 ? '#0d1527' : '#0f182c';
                    ctx.fillRect(b.left, b.top, b.size, b.size);
                    // Subtle internal pathway line
                    ctx.strokeStyle = '#1a2438';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(b.left, b.top, b.size, b.size);
                }
            }
            // 1b. Draw Slime Mold Explored Network & Dead-End Branches (Organic Physarum Redesign)
            if (isVisualizerEnabled && showExplored && effectiveVisualizer) {
                const activeProgress = growthProgressRef.current;
                const stepsToRender = effectiveVisualizer.explorationSteps || [];
                const totalSteps = stepsToRender.length;
                const visibleCount = Math.max(1, Math.floor(totalSteps * activeProgress));
                const renderedSteps = stepsToRender.slice(0, visibleCount);
                const hasReachedGoal = renderedSteps.some({
                    "MazeCanvas.useCallback[drawScene].hasReachedGoal": (s)=>s.x === mazeData.end_node[0] && s.y === mazeData.end_node[1]
                }["MazeCanvas.useCallback[drawScene].hasReachedGoal"]);
                // Once goal is reached by the growth process (>= 98% progress), highlight optimal path in vibrant green
                const isOptimalActive = hasReachedGoal && activeProgress >= 0.98;
                // Pass 1: Soft bioluminescent cell floor washes
                for (const step of renderedSteps){
                    const b = getCellBounds(step.x, step.y);
                    ctx.save();
                    if (step.isWinningPath && isOptimalActive) {
                        ctx.fillStyle = 'rgba(34, 197, 94, 0.15)'; // Radiant emerald wash for winning path
                    } else if (step.isDeadEnd && !step.isWinningPath) {
                        ctx.fillStyle = 'rgba(239, 68, 68, 0.12)'; // Soft crimson wash for dead ends
                    } else {
                        ctx.fillStyle = 'rgba(168, 85, 247, 0.07)'; // Organic translucent protoplasm
                    }
                    ctx.fillRect(b.left + 1, b.top + 1, b.size - 2, b.size - 2);
                    ctx.restore();
                }
                // Pass 2: Explored & dead-end branch tendril conduits
                ctx.save();
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                for (const step of renderedSteps){
                    if (step.parentX === undefined || step.parentY === undefined) continue;
                    if (step.isWinningPath && isOptimalActive) continue; // Drawn later in radiant green
                    const pBounds = getCellBounds(step.parentX, step.parentY);
                    const cBounds = getCellBounds(step.x, step.y);
                    if (step.isDeadEnd) {
                        // Dead-end branch conduit: warm crimson glow
                        ctx.strokeStyle = 'rgba(239, 68, 68, 0.50)';
                        ctx.shadowColor = 'rgba(239, 68, 68, 0.40)';
                        ctx.shadowBlur = 6;
                        ctx.lineWidth = Math.max(2.5, cellSize * 0.11);
                    } else {
                        // Exploring protoplasm vein: bio-luminescent violet
                        ctx.strokeStyle = 'rgba(168, 85, 247, 0.50)';
                        ctx.shadowColor = 'rgba(168, 85, 247, 0.30)';
                        ctx.shadowBlur = 4;
                        ctx.lineWidth = Math.max(2.2, cellSize * 0.09);
                    }
                    ctx.beginPath();
                    ctx.moveTo(pBounds.centerX, pBounds.centerY);
                    ctx.lineTo(cBounds.centerX, cBounds.centerY);
                    ctx.stroke();
                }
                ctx.restore();
                // Pass 3: Optimal Path in RADIANT GREEN (when destination found)
                if (isOptimalActive) {
                    ctx.save();
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    // Outer emerald glow aura
                    ctx.strokeStyle = 'rgba(34, 197, 94, 0.40)';
                    ctx.shadowColor = '#22c55e';
                    ctx.shadowBlur = 14;
                    ctx.lineWidth = Math.max(5, cellSize * 0.22);
                    for (const step of renderedSteps){
                        if (step.parentX === undefined || step.parentY === undefined || !step.isWinningPath) continue;
                        const pBounds = getCellBounds(step.parentX, step.parentY);
                        const cBounds = getCellBounds(step.x, step.y);
                        ctx.beginPath();
                        ctx.moveTo(pBounds.centerX, pBounds.centerY);
                        ctx.lineTo(cBounds.centerX, cBounds.centerY);
                        ctx.stroke();
                    }
                    // Inner bright green core
                    ctx.strokeStyle = '#4ade80';
                    ctx.shadowColor = '#86efac';
                    ctx.shadowBlur = 4;
                    ctx.lineWidth = Math.max(2.6, cellSize * 0.11);
                    for (const step of renderedSteps){
                        if (step.parentX === undefined || step.parentY === undefined || !step.isWinningPath) continue;
                        const pBounds = getCellBounds(step.parentX, step.parentY);
                        const cBounds = getCellBounds(step.x, step.y);
                        ctx.beginPath();
                        ctx.moveTo(pBounds.centerX, pBounds.centerY);
                        ctx.lineTo(cBounds.centerX, cBounds.centerY);
                        ctx.stroke();
                    }
                    ctx.restore();
                }
                // Pass 4: Dead-End Red Highlights & Optimal Path Junctions
                for (const step of renderedSteps){
                    const b = getCellBounds(step.x, step.y);
                    // DEAD END REACHED: Highlight in RED with reached depth!
                    if (step.isDeadEnd && !step.isWinningPath) {
                        ctx.save();
                        // Soft red aura
                        ctx.fillStyle = 'rgba(239, 68, 68, 0.28)';
                        ctx.beginPath();
                        ctx.arc(b.centerX, b.centerY, Math.max(5, cellSize * 0.18), 0, Math.PI * 2);
                        ctx.fill();
                        // Red terminus dot
                        ctx.fillStyle = '#ef4444';
                        ctx.shadowColor = '#ef4444';
                        ctx.shadowBlur = 8;
                        ctx.beginPath();
                        ctx.arc(b.centerX, b.centerY, Math.max(3, cellSize * 0.10), 0, Math.PI * 2);
                        ctx.fill();
                        // Depth indicator showing how deep this probed corridor reached
                        if (cellSize >= 20 && step.branchDepth !== undefined) {
                            const depthSize = Math.max(6.5, Math.min(9, cellSize * 0.18));
                            ctx.font = `bold ${depthSize}px monospace`;
                            ctx.fillStyle = '#fca5a5';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            const depthLabel = cellSize >= 32 ? `end(${step.branchDepth})` : `d:${step.branchDepth}`;
                            ctx.fillText(depthLabel, b.centerX, b.bottom - 2);
                        }
                        ctx.restore();
                    } else if (step.isWinningPath && isOptimalActive) {
                        // Optimal path junction node (smooth green dot)
                        ctx.save();
                        ctx.fillStyle = '#22c55e';
                        ctx.shadowColor = '#4ade80';
                        ctx.shadowBlur = 6;
                        ctx.beginPath();
                        ctx.arc(b.centerX, b.centerY, Math.max(2.8, cellSize * 0.10), 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                    }
                }
                // Pass 5: Active biological growth tip (pseudopodium pulse at the wavefront)
                if (isGrowing || growthProgress > 0 && growthProgress < 0.99) {
                    const frontStep = renderedSteps[renderedSteps.length - 1];
                    if (frontStep) {
                        const fb = getCellBounds(frontStep.x, frontStep.y);
                        ctx.save();
                        ctx.fillStyle = 'rgba(168, 85, 247, 0.35)';
                        ctx.beginPath();
                        ctx.arc(fb.centerX, fb.centerY, Math.max(6, cellSize * 0.24), 0, Math.PI * 2);
                        ctx.fill();
                        ctx.fillStyle = '#e879f9';
                        ctx.shadowColor = '#e879f9';
                        ctx.shadowBlur = 10;
                        ctx.beginPath();
                        ctx.arc(fb.centerX, fb.centerY, Math.max(3.5, cellSize * 0.13), 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                    }
                }
            }
            // 1c. Draw Path Direction Vectors / Flow Arrows (if enabled)
            if (isVisualizerEnabled && showDirections && effectiveVisualizer) {
                const activeProgress = growthProgressRef.current;
                const stepsToRender = effectiveVisualizer.explorationSteps || [];
                const visibleCount = Math.max(1, Math.floor(stepsToRender.length * activeProgress));
                const renderedSteps = stepsToRender.slice(0, visibleCount);
                for (const step of renderedSteps){
                    if (!step.direction) continue;
                    // Skip target goal cell because it has the checkered flag
                    const isGoal = step.x === mazeData.end_node[0] && step.y === mazeData.end_node[1];
                    if (isGoal) continue;
                    const b = getCellBounds(step.x, step.y);
                    drawDirectionVector(ctx, b.centerX, b.centerY, step.direction, cellSize, Boolean(step.isWinningPath));
                }
            }
            // 1d. Draw Node Weights and Heuristic Costs (f/g/h) (if enabled)
            if (isVisualizerEnabled && showWeights && effectiveVisualizer) {
                const activeProgress = growthProgressRef.current;
                const stepsToRender = effectiveVisualizer.explorationSteps || [];
                const visibleCount = Math.max(1, Math.floor(stepsToRender.length * activeProgress));
                const renderedSteps = stepsToRender.slice(0, visibleCount);
                for (const step of renderedSteps){
                    const isStart = step.x === mazeData.start_node[0] && step.y === mazeData.start_node[1];
                    const isGoal = step.x === mazeData.end_node[0] && step.y === mazeData.end_node[1];
                    if (isStart || isGoal) continue;
                    const b = getCellBounds(step.x, step.y);
                    if (cellSize >= 30) {
                        ctx.save();
                        if (effectiveVisualizer.hasWeights && step.fCost !== undefined) {
                            // Display f = g + h score in gold/amber
                            const fSize = Math.max(7, Math.min(10, cellSize * 0.20));
                            ctx.font = `bold ${fSize}px monospace`;
                            ctx.fillStyle = step.isWinningPath ? '#fbbf24' : 'rgba(251, 191, 36, 0.75)';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'top';
                            ctx.fillText(`f:${step.fCost}`, b.right - 3, b.top + 2);
                            // Sub-cost g and h if room
                            if (cellSize >= 42 && step.gCost !== undefined && step.hCost !== undefined) {
                                const subSize = Math.max(6, Math.min(8, cellSize * 0.15));
                                ctx.font = `${subSize}px monospace`;
                                ctx.fillStyle = 'rgba(148, 163, 184, 0.65)';
                                ctx.textAlign = 'right';
                                ctx.textBaseline = 'bottom';
                                ctx.fillText(`g:${step.gCost} h:${step.hCost}`, b.right - 3, b.bottom - 2);
                            }
                        } else if (step.gCost !== undefined) {
                            // Cost / weight
                            const gSize = Math.max(7, Math.min(9, cellSize * 0.18));
                            ctx.font = `${gSize}px monospace`;
                            ctx.fillStyle = step.isWinningPath ? '#34d399' : 'rgba(148, 163, 184, 0.65)';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'top';
                            ctx.fillText(`c:${step.gCost}`, b.right - 3, b.top + 2);
                        }
                        ctx.restore();
                    }
                }
            }
            // 2. Highlight START CELL (0, 0)
            const startCell = getCellBounds(mazeData.start_node[0], mazeData.start_node[1]);
            ctx.save();
            ctx.fillStyle = 'rgba(16, 185, 129, 0.22)';
            ctx.fillRect(startCell.left, startCell.top, startCell.size, startCell.size);
            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 2;
            ctx.strokeRect(startCell.left + 1, startCell.top + 1, startCell.size - 2, startCell.size - 2);
            // START cell label tag
            const fontSize = Math.max(8, Math.min(12, cellSize * 0.22));
            ctx.font = `bold ${fontSize}px sans-serif`;
            ctx.fillStyle = '#34d399';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText('START', startCell.centerX, startCell.top + 3);
            ctx.font = `600 ${Math.max(7, fontSize * 0.8)}px monospace`;
            ctx.fillStyle = 'rgba(52, 211, 153, 0.7)';
            ctx.fillText('(0,0)', startCell.centerX, startCell.bottom - fontSize - 2);
            ctx.restore();
            // 3. Highlight END / TARGET CELL (width-1, height-1)
            const endCell = getCellBounds(mazeData.end_node[0], mazeData.end_node[1]);
            ctx.save();
            ctx.fillStyle = 'rgba(6, 182, 212, 0.28)';
            ctx.fillRect(endCell.left, endCell.top, endCell.size, endCell.size);
            ctx.strokeStyle = '#06b6d4';
            ctx.lineWidth = 2.5;
            ctx.shadowColor = '#06b6d4';
            ctx.shadowBlur = 8;
            ctx.strokeRect(endCell.left + 1, endCell.top + 1, endCell.size - 2, endCell.size - 2);
            // TARGET cell label tag
            ctx.font = `bold ${fontSize}px sans-serif`;
            ctx.fillStyle = '#38bdf8';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText('GOAL 🏁', endCell.centerX, endCell.top + 3);
            ctx.font = `600 ${Math.max(7, fontSize * 0.8)}px monospace`;
            ctx.fillStyle = 'rgba(56, 189, 248, 0.8)';
            ctx.fillText(`(${mazeData.end_node[0]},${mazeData.end_node[1]})`, endCell.centerX, endCell.bottom - fontSize - 2);
            ctx.restore();
            // 4. Draw Traveled Path Trail (inside cells)
            const trail = robotRef.current.trail;
            if (trail.length > 1) {
                ctx.save();
                ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
                ctx.lineWidth = Math.max(3, cellSize * 0.14);
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.beginPath();
                const first = getCellBounds(trail[0][0], trail[0][1]);
                ctx.moveTo(first.centerX, first.centerY);
                for(let i = 1; i < trail.length; i++){
                    const pt = getCellBounds(trail[i][0], trail[i][1]);
                    ctx.lineTo(pt.centerX, pt.centerY);
                }
                ctx.stroke();
                ctx.restore();
            }
            // 5. Draw Virtual Walls (Thick Red Barriers between cells)
            ctx.save();
            ctx.strokeStyle = '#f43f5e';
            const wallThick = Math.max(3, Math.min(7, cellSize * 0.14));
            ctx.lineWidth = wallThick;
            ctx.lineCap = 'round';
            ctx.shadowColor = 'rgba(244, 63, 94, 0.8)';
            ctx.shadowBlur = 6;
            for(let y = 0; y < rows; y++){
                for(let x = 0; x < cols; x++){
                    const wallMask = mazeData.grid[y][x];
                    const b = getCellBounds(x, y);
                    // North wall
                    if (wallMask & __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALL_NORTH"]) {
                        ctx.beginPath();
                        ctx.moveTo(b.left, b.top);
                        ctx.lineTo(b.right, b.top);
                        ctx.stroke();
                    }
                    // South wall
                    if (wallMask & __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALL_SOUTH"]) {
                        ctx.beginPath();
                        ctx.moveTo(b.left, b.bottom);
                        ctx.lineTo(b.right, b.bottom);
                        ctx.stroke();
                    }
                    // West wall
                    if (wallMask & __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALL_WEST"]) {
                        ctx.beginPath();
                        ctx.moveTo(b.left, b.top);
                        ctx.lineTo(b.left, b.bottom);
                        ctx.stroke();
                    }
                    // East wall
                    if (wallMask & __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mazeGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALL_EAST"]) {
                        ctx.beginPath();
                        ctx.moveTo(b.right, b.top);
                        ctx.lineTo(b.right, b.bottom);
                        ctx.stroke();
                    }
                }
            }
            ctx.restore();
            // 6. Draw Outer Border Frame
            ctx.save();
            ctx.strokeStyle = '#f43f5e';
            ctx.lineWidth = wallThick;
            ctx.strokeRect(offsetX, offsetY, totalGridW, totalGridH);
            ctx.restore();
            // 7. Draw Robot INSIDE the current cell
            const robot = robotRef.current;
            const currentCell = getCellBounds(robot.x, robot.y);
            const drawX = robot.screenX !== null ? robot.screenX : currentCell.centerX;
            const drawY = robot.screenY !== null ? robot.screenY : currentCell.centerY;
            ctx.save();
            ctx.translate(drawX, drawY);
            ctx.rotate(robot.angle);
            const robotRadius = Math.max(8, Math.min(22, cellSize * 0.34));
            // Robot Underglow
            ctx.shadowColor = '#06b6d4';
            ctx.shadowBlur = 14;
            // Robot Chassis (Sleek Autonomous Rover)
            ctx.fillStyle = '#0284c7';
            ctx.beginPath();
            ctx.roundRect(-robotRadius, -robotRadius * 0.8, robotRadius * 2, robotRadius * 1.6, 5);
            ctx.fill();
            // Rubber Treads (top & bottom)
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(-robotRadius * 0.95, -robotRadius * 0.95, robotRadius * 1.9, 3.5);
            ctx.fillRect(-robotRadius * 0.95, robotRadius * 0.95 - 3.5, robotRadius * 1.9, 3.5);
            // Sensor Turret Dome
            ctx.fillStyle = '#38bdf8';
            ctx.beginPath();
            ctx.arc(robotRadius * 0.25, 0, robotRadius * 0.45, 0, Math.PI * 2);
            ctx.fill();
            // Forward Direction Nose Pointer
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.moveTo(robotRadius * 0.9, 0);
            ctx.lineTo(robotRadius * 0.2, -robotRadius * 0.38);
            ctx.lineTo(robotRadius * 0.38, 0);
            ctx.lineTo(robotRadius * 0.2, robotRadius * 0.38);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }["MazeCanvas.useCallback[drawScene]"], [
        mazeData,
        getCellGeometry,
        isVisualizerEnabled,
        showDirections,
        showExplored,
        showWeights,
        effectiveVisualizer
    ]);
    drawSceneRef.current = drawScene;
    // Ensure canvas re-renders immediately when visualizer is toggled on/off
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MazeCanvas.useEffect": ()=>{
            drawScene();
        }
    }["MazeCanvas.useEffect"], [
        isVisualizerEnabled,
        drawScene
    ]);
    // Handle Resize smoothly
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MazeCanvas.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const ro = new ResizeObserver({
                "MazeCanvas.useEffect": ()=>{
                    drawScene();
                }
            }["MazeCanvas.useEffect"]);
            ro.observe(container);
            drawScene();
            return ({
                "MazeCanvas.useEffect": ()=>ro.disconnect()
            })["MazeCanvas.useEffect"];
        }
    }["MazeCanvas.useEffect"], [
        drawScene
    ]);
    // Reset robot position when maze changes or resetKey is triggered
    const resetRobot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazeCanvas.useCallback[resetRobot]": ()=>{
            runIdRef.current++; // cancel any running simulation
            if (animFrameIdRef.current) {
                cancelAnimationFrame(animFrameIdRef.current);
                animFrameIdRef.current = null;
            }
            if (growthAnimRef.current) {
                cancelAnimationFrame(growthAnimRef.current);
                growthAnimRef.current = null;
            }
            setIsGrowing(false);
            growthProgressRef.current = 0.01;
            setGrowthProgress(0.01);
            robotRef.current = {
                x: mazeData.start_node[0],
                y: mazeData.start_node[1],
                heading: 'E',
                angle: 0,
                screenX: null,
                screenY: null,
                trail: [
                    [
                        mazeData.start_node[0],
                        mazeData.start_node[1]
                    ]
                ]
            };
            setCollisionFlash(false);
            drawScene();
        }
    }["MazeCanvas.useCallback[resetRobot]"], [
        mazeData,
        drawScene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MazeCanvas.useEffect": ()=>{
            resetRobot();
        }
    }["MazeCanvas.useEffect"], [
        mazeData,
        resetKey,
        resetRobot
    ]);
    // Turn helper
    const turnHeading = (current, command)=>{
        const headings = [
            'N',
            'E',
            'S',
            'W'
        ];
        const idx = headings.indexOf(current);
        if (command === 'LEFT') return headings[(idx + 3) % 4];
        if (command === 'RIGHT') return headings[(idx + 1) % 4];
        if (command === 'U_TURN') return headings[(idx + 2) % 4];
        return current;
    };
    // Execution Loop: Guaranteed Single Thread with runId lock
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MazeCanvas.useEffect": ()=>{
            if (!isSimulating || commands.length === 0) {
                runIdRef.current++; // invalidate previous run
                if (animFrameIdRef.current) {
                    cancelAnimationFrame(animFrameIdRef.current);
                    animFrameIdRef.current = null;
                }
                if (growthAnimRef.current) {
                    cancelAnimationFrame(growthAnimRef.current);
                    growthAnimRef.current = null;
                }
                setIsGrowing(false);
                return;
            }
            // Start fresh simulation run with unique ID
            const currentRunId = ++runIdRef.current;
            let stepIndex = 0;
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const cssWidth = Math.floor(rect.width) || canvas.clientWidth || 500;
            const cssHeight = Math.floor(rect.height) || canvas.clientHeight || 500;
            const { cellSize, getCellBounds } = getCellGeometry(cssWidth, cssHeight);
            const cols = mazeData.width;
            const rows = mazeData.height;
            // Guaranteed reset of robot position to START cell on simulation launch
            robotRef.current = {
                x: mazeData.start_node[0],
                y: mazeData.start_node[1],
                heading: 'E',
                angle: 0,
                screenX: null,
                screenY: null,
                trail: [
                    [
                        mazeData.start_node[0],
                        mazeData.start_node[1]
                    ]
                ]
            };
            setCollisionFlash(false);
            drawScene();
            const baseDuration = Math.max(40, 550 / Math.max(1, simulationSpeed));
            const executeNextStep = {
                "MazeCanvas.useEffect.executeNextStep": ()=>{
                    // Abort if this run is no longer active
                    if (currentRunId !== runIdRef.current) return;
                    if (stepIndex >= commands.length) {
                        const finalX = robotRef.current.x;
                        const finalY = robotRef.current.y;
                        const reachedTarget = finalX === mazeData.end_node[0] && finalY === mazeData.end_node[1];
                        if (reachedTarget) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                                particleCount: 100,
                                spread: 80,
                                origin: {
                                    y: 0.6
                                }
                            });
                            onSimulationEnd('success', stepIndex);
                        } else {
                            onSimulationEnd('stopped', stepIndex);
                        }
                        return;
                    }
                    const cmd = commands[stepIndex];
                    const curX = robotRef.current.x;
                    const curY = robotRef.current.y;
                    const curHeading = robotRef.current.heading;
                    onStepProgress(stepIndex + 1, commands.length, {
                        x: curX,
                        y: curY,
                        heading: curHeading
                    });
                    if (cmd === 'FORWARD') {
                        const delta = HEADING_DELTAS[curHeading];
                        const nextX = curX + delta.dx;
                        const nextY = curY + delta.dy;
                        // Collision Check: Virtual wall on the current cell border
                        const currentWallMask = mazeData.grid[curY][curX];
                        const hasWall = (currentWallMask & delta.wall) !== 0;
                        const isOutOfBounds = nextX < 0 || nextX >= cols || nextY < 0 || nextY >= rows;
                        if (hasWall || isOutOfBounds) {
                            setCollisionFlash(true);
                            onCollision([
                                curX,
                                curY
                            ], curHeading);
                            // Animate brief bump shock
                            const bumpStart = performance.now();
                            const bumpDuration = 180;
                            const fromPos = getCellBounds(curX, curY);
                            const animateBump = {
                                "MazeCanvas.useEffect.executeNextStep.animateBump": (now)=>{
                                    if (currentRunId !== runIdRef.current) return;
                                    const elapsed = now - bumpStart;
                                    const progress = Math.min(1, elapsed / bumpDuration);
                                    const bumpOffset = Math.sin(progress * Math.PI) * (cellSize * 0.22);
                                    robotRef.current.screenX = fromPos.centerX + delta.dx * bumpOffset;
                                    robotRef.current.screenY = fromPos.centerY + delta.dy * bumpOffset;
                                    drawScene();
                                    if (progress < 1) {
                                        requestAnimationFrame(animateBump);
                                    } else {
                                        robotRef.current.screenX = null;
                                        robotRef.current.screenY = null;
                                        drawScene();
                                        setTimeout({
                                            "MazeCanvas.useEffect.executeNextStep.animateBump": ()=>{
                                                if (currentRunId === runIdRef.current) {
                                                    setCollisionFlash(false);
                                                    onSimulationEnd('collision', stepIndex + 1);
                                                }
                                            }
                                        }["MazeCanvas.useEffect.executeNextStep.animateBump"], 250);
                                    }
                                }
                            }["MazeCanvas.useEffect.executeNextStep.animateBump"];
                            requestAnimationFrame(animateBump);
                            return;
                        }
                        // Smooth Forward Translation from center of cell (curX, curY) to cell (nextX, nextY)
                        const fromPos = getCellBounds(curX, curY);
                        const toPos = getCellBounds(nextX, nextY);
                        const moveStart = performance.now();
                        const animateMove = {
                            "MazeCanvas.useEffect.executeNextStep.animateMove": (now)=>{
                                if (currentRunId !== runIdRef.current) return;
                                const elapsed = now - moveStart;
                                const progress = Math.min(1, elapsed / baseDuration);
                                robotRef.current.screenX = fromPos.centerX + (toPos.centerX - fromPos.centerX) * progress;
                                robotRef.current.screenY = fromPos.centerY + (toPos.centerY - fromPos.centerY) * progress;
                                drawScene();
                                if (progress < 1) {
                                    animFrameIdRef.current = requestAnimationFrame(animateMove);
                                } else {
                                    robotRef.current.x = nextX;
                                    robotRef.current.y = nextY;
                                    robotRef.current.screenX = null;
                                    robotRef.current.screenY = null;
                                    robotRef.current.trail.push([
                                        nextX,
                                        nextY
                                    ]);
                                    drawScene();
                                    stepIndex++;
                                    setTimeout(executeNextStep, 15);
                                }
                            }
                        }["MazeCanvas.useEffect.executeNextStep.animateMove"];
                        animFrameIdRef.current = requestAnimationFrame(animateMove);
                    } else {
                        // Rotation (LEFT, RIGHT, U_TURN) in place inside cell
                        const nextHeading = turnHeading(curHeading, cmd);
                        const startAngle = robotRef.current.angle;
                        let deltaAngle = 0;
                        if (cmd === 'RIGHT') deltaAngle = Math.PI / 2;
                        else if (cmd === 'LEFT') deltaAngle = -Math.PI / 2;
                        else if (cmd === 'U_TURN') deltaAngle = Math.PI;
                        const turnStart = performance.now();
                        const rotDuration = baseDuration * 0.75;
                        const animateTurn = {
                            "MazeCanvas.useEffect.executeNextStep.animateTurn": (now)=>{
                                if (currentRunId !== runIdRef.current) return;
                                const elapsed = now - turnStart;
                                const progress = Math.min(1, elapsed / rotDuration);
                                robotRef.current.angle = startAngle + deltaAngle * progress;
                                drawScene();
                                if (progress < 1) {
                                    animFrameIdRef.current = requestAnimationFrame(animateTurn);
                                } else {
                                    robotRef.current.heading = nextHeading;
                                    robotRef.current.angle = HEADING_ANGLES[nextHeading];
                                    drawScene();
                                    stepIndex++;
                                    setTimeout(executeNextStep, 15);
                                }
                            }
                        }["MazeCanvas.useEffect.executeNextStep.animateTurn"];
                        animFrameIdRef.current = requestAnimationFrame(animateTurn);
                    }
                }
            }["MazeCanvas.useEffect.executeNextStep"];
            // Determine whether to run visualizer exploration animation before moving robot
            const vizData = effectiveVisualizerRef.current;
            const shouldVisualizeFirst = isVisualizerEnabled && showExplored && Boolean(vizData?.explorationSteps?.length);
            if (shouldVisualizeFirst) {
                // 1. Reset progress to 0% so optimal path is NOT shown at the first instant
                growthProgressRef.current = 0.01;
                setGrowthProgress(0.01);
                setIsGrowing(true);
                drawScene();
                const growthStart = performance.now();
                // Smooth growth duration scaled by simulationSpeed and growthSpeed
                const speedFactor = Math.max(1, simulationSpeed * 0.35) * growthSpeed;
                const growthDuration = Math.max(650, 2200 / speedFactor);
                const runGrowthAnim = {
                    "MazeCanvas.useEffect.runGrowthAnim": (now)=>{
                        if (currentRunId !== runIdRef.current) return;
                        const elapsed = now - growthStart;
                        const progress = Math.min(1, elapsed / growthDuration);
                        growthProgressRef.current = progress;
                        drawScene();
                        if (progress < 1) {
                            growthAnimRef.current = requestAnimationFrame(runGrowthAnim);
                        } else {
                            // Growth completed: optimal path is now reached & highlighted in green!
                            growthProgressRef.current = 1;
                            setGrowthProgress(1);
                            setIsGrowing(false);
                            growthAnimRef.current = null;
                            drawScene();
                            // Brief 250ms pause to clearly show the found optimal path, then start moving the robot!
                            setTimeout({
                                "MazeCanvas.useEffect.runGrowthAnim": ()=>{
                                    if (currentRunId === runIdRef.current) {
                                        executeNextStep();
                                    }
                                }
                            }["MazeCanvas.useEffect.runGrowthAnim"], 250);
                        }
                    }
                }["MazeCanvas.useEffect.runGrowthAnim"];
                growthAnimRef.current = requestAnimationFrame(runGrowthAnim);
            } else {
                // If visualizer is OFF: robot must instantly start moving as per the code!
                executeNextStep();
            }
            return ({
                "MazeCanvas.useEffect": ()=>{
                    runIdRef.current++; // cancel this run on unmount/re-run
                    if (animFrameIdRef.current) {
                        cancelAnimationFrame(animFrameIdRef.current);
                        animFrameIdRef.current = null;
                    }
                    if (growthAnimRef.current) {
                        cancelAnimationFrame(growthAnimRef.current);
                        growthAnimRef.current = null;
                    }
                    setIsGrowing(false);
                }
            })["MazeCanvas.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MazeCanvas.useEffect"], [
        isSimulating,
        commands,
        isVisualizerEnabled,
        showExplored,
        simulationSpeed,
        growthSpeed,
        mazeData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `relative w-full h-full min-h-[420px] rounded-xl overflow-hidden border border-slate-800 bg-[#080d1a] flex items-center justify-center transition-colors duration-300 ${collisionFlash ? 'ring-4 ring-rose-500 shadow-[0_0_35px_rgba(244,63,94,0.7)]' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "block w-full h-full"
            }, void 0, false, {
                fileName: "[project]/src/components/MazeCanvas.tsx",
                lineNumber: 1135,
                columnNumber: 7
            }, this),
            collisionFlash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-rose-600/30 backdrop-blur-[1px] pointer-events-none flex items-center justify-center animate-pulse z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-rose-950/95 border-2 border-rose-500 text-rose-200 px-6 py-3 rounded-xl shadow-2xl font-bold tracking-wider text-sm flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl",
                            children: "💥"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MazeCanvas.tsx",
                            lineNumber: 1141,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "VIRTUAL WALL COLLISION! (+5s penalty)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MazeCanvas.tsx",
                            lineNumber: 1142,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MazeCanvas.tsx",
                    lineNumber: 1140,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MazeCanvas.tsx",
                lineNumber: 1139,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "visualizer-top-left-panel",
                onMouseEnter: handleVisualizerMouseEnter,
                onMouseLeave: handleVisualizerMouseLeave,
                className: "group/viz absolute top-3 left-3 z-30 transition-all duration-200 ease-out",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 hover:bg-slate-900/95 backdrop-blur-md border border-slate-800 hover:border-purple-500/50 rounded-xl shadow-xl transition-all duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: "btn-visualizer-eye-toggle",
                            type: "button",
                            onClick: (e)=>{
                                e.stopPropagation();
                                setIsVisualizerEnabled((v)=>!v);
                            },
                            title: isVisualizerEnabled ? 'Visualizer updates are ON: Click eyeball to turn OFF' : 'Visualizer is OFF: Click eyeball to turn ON',
                            className: `p-1 rounded-lg transition-all cursor-pointer flex items-center justify-center ${isVisualizerEnabled ? 'text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/15' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'}`,
                            children: isVisualizerEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                className: "w-3.5 h-3.5 stroke-[2.2]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                lineNumber: 1175,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                className: "w-3.5 h-3.5 stroke-[2.2]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                lineNumber: 1177,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MazeCanvas.tsx",
                            lineNumber: 1156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: "btn-visualizer-badge",
                            type: "button",
                            onClick: ()=>setIsVisualizerExpanded((v)=>!v),
                            title: "Hover to view and configure visualizer controls",
                            className: "flex items-center gap-1 px-1.5 py-1 text-slate-200 text-xs font-semibold cursor-pointer select-none rounded-lg hover:bg-slate-800/60 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Visualizer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MazeCanvas.tsx",
                                    lineNumber: 1189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: `w-3 h-3 text-slate-400 group-hover/viz:text-purple-300 transition-transform duration-200 ${isVisualizerExpanded ? 'rotate-180' : 'group-hover/viz:rotate-180'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MazeCanvas.tsx",
                                    lineNumber: 1190,
                                    columnNumber: 13
                                }, this),
                                isVisualizerEnabled && effectiveVisualizer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] ml-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MazeCanvas.tsx",
                                    lineNumber: 1196,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MazeCanvas.tsx",
                            lineNumber: 1182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "visualizer-controls-menu",
                            className: `${isVisualizerExpanded ? 'flex' : 'hidden group-hover/viz:flex'} flex-wrap items-center gap-1.5 text-xs animate-in fade-in zoom-in-95 duration-150 pl-1 border-l border-slate-800`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "btn-visualizer-master-toggle",
                                    onClick: ()=>setIsVisualizerEnabled((v)=>!v),
                                    title: isVisualizerEnabled ? 'Visualizer updates are active on maze (click to turn OFF)' : 'Visualizer is hidden (click to turn ON)',
                                    className: `flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${isVisualizerEnabled ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/10' : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200'}`,
                                    children: isVisualizerEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "w-3 h-3 text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                                lineNumber: 1224,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "ON"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                                lineNumber: 1225,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MazeCanvas.tsx",
                                        lineNumber: 1223,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                className: "w-3 h-3 text-slate-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                                lineNumber: 1229,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                                lineNumber: 1230,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MazeCanvas.tsx",
                                        lineNumber: 1228,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MazeCanvas.tsx",
                                    lineNumber: 1208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "btn-toggle-explored",
                                    onClick: handleToggleExplored,
                                    title: "Toggle algorithm explored tree and visited node sequence",
                                    className: `flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${showExplored ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm shadow-purple-500/10' : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Explored"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1247,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MazeCanvas.tsx",
                                    lineNumber: 1236,
                                    columnNumber: 13
                                }, this),
                                showExplored && effectiveVisualizer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 bg-slate-800/80 border border-purple-500/30 rounded-md px-2 py-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            id: "btn-growth-play-pause",
                                            onClick: ()=>{
                                                if (isGrowing) {
                                                    pauseGrowthAnimation();
                                                } else if (growthProgress >= 0.98) {
                                                    playGrowthAnimation(false);
                                                } else {
                                                    playGrowthAnimation(true);
                                                }
                                            },
                                            title: isGrowing ? 'Pause growth animation' : growthProgress >= 0.98 ? 'Replay growth animation from start' : 'Resume growth animation',
                                            className: "flex items-center gap-1 text-[11px] font-medium text-purple-300 hover:text-white transition-colors cursor-pointer",
                                            children: isGrowing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                        className: "w-3 h-3 fill-current text-amber-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MazeCanvas.tsx",
                                                        lineNumber: 1276,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden md:inline text-amber-300",
                                                        children: "Pause"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MazeCanvas.tsx",
                                                        lineNumber: 1277,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                                lineNumber: 1275,
                                                columnNumber: 21
                                            }, this) : growthProgress >= 0.98 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                        className: "w-3 h-3 text-purple-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MazeCanvas.tsx",
                                                        lineNumber: 1281,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden md:inline",
                                                        children: "Replay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MazeCanvas.tsx",
                                                        lineNumber: 1282,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                                lineNumber: 1280,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "w-3 h-3 fill-current text-emerald-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MazeCanvas.tsx",
                                                        lineNumber: 1286,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden md:inline text-emerald-300",
                                                        children: "Play"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MazeCanvas.tsx",
                                                        lineNumber: 1287,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                                lineNumber: 1285,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1254,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "growth-scrubber-slider",
                                                    type: "range",
                                                    min: "0.02",
                                                    max: "1",
                                                    step: "0.01",
                                                    value: growthProgress,
                                                    onChange: (e)=>handleScrubberChange(parseFloat(e.target.value)),
                                                    title: `Growth progress: ${Math.round(growthProgress * 100)}%`,
                                                    className: "w-20 sm:w-28 accent-purple-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MazeCanvas.tsx",
                                                    lineNumber: 1294,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-mono text-purple-300 min-w-[28px]",
                                                    children: [
                                                        Math.round(growthProgress * 100),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MazeCanvas.tsx",
                                                    lineNumber: 1305,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1293,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            id: "btn-growth-speed",
                                            onClick: cycleSpeed,
                                            title: "Change growth animation speed",
                                            className: "px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 hover:text-white border border-slate-700 text-[10px] font-mono cursor-pointer",
                                            children: [
                                                growthSpeed,
                                                "x"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1311,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MazeCanvas.tsx",
                                    lineNumber: 1252,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "btn-toggle-directions",
                                    onClick: ()=>setShowDirections((v)=>!v),
                                    title: "Toggle path direction vectors & motion arrows on maze cells",
                                    className: `flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${showDirections ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-slate-800/80 text-slate-400 border border-slate-700 hover:text-slate-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Flow"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1334,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MazeCanvas.tsx",
                                    lineNumber: 1323,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "btn-toggle-weights",
                                    onClick: ()=>setShowWeights((v)=>!v),
                                    title: "Toggle node weights and heuristic cost indicators (g, h, f)",
                                    className: `flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${showWeights ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-800/80 text-slate-400 border border-slate-700 hover:text-slate-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1348,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Weights"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1349,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MazeCanvas.tsx",
                                    lineNumber: 1338,
                                    columnNumber: 13
                                }, this),
                                effectiveVisualizer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 text-[11px] font-mono pl-1 border-l border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-cyan-400 font-medium truncate max-w-[150px] sm:max-w-none",
                                            children: effectiveVisualizer.algorithmName || 'Algorithm'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1355,
                                            columnNumber: 17
                                        }, this),
                                        effectiveVisualizer.deadEndCount !== undefined && effectiveVisualizer.deadEndCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-400 border border-rose-500/30 text-[10px]",
                                            children: [
                                                effectiveVisualizer.deadEndCount,
                                                " dead ends"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1359,
                                            columnNumber: 19
                                        }, this),
                                        effectiveVisualizer.hasWeights && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[10px]",
                                            children: "Weighted"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1364,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400 text-[10px]",
                                            children: [
                                                effectiveVisualizer.explorationSteps?.length || Object.keys(effectiveVisualizer.nodes).length,
                                                " probed"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MazeCanvas.tsx",
                                            lineNumber: 1368,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MazeCanvas.tsx",
                                    lineNumber: 1354,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 text-[11px] pl-1 border-l border-slate-800",
                                    children: "Run solver to visualize"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MazeCanvas.tsx",
                                    lineNumber: 1373,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MazeCanvas.tsx",
                            lineNumber: 1201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MazeCanvas.tsx",
                    lineNumber: 1154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MazeCanvas.tsx",
                lineNumber: 1148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 left-3 bg-slate-900/95 backdrop-blur-md border border-slate-800/90 text-[10.5px] p-2.5 rounded-xl flex flex-col gap-1.5 text-slate-300 shadow-2xl pointer-events-none z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[9px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1 mb-0.5",
                        children: "Maze Legend"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MazeCanvas.tsx",
                        lineNumber: 1381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-2.5 rounded bg-emerald-500/30 border border-emerald-400 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                lineNumber: 1385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-emerald-400",
                                children: "START (0,0)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                lineNumber: 1386,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MazeCanvas.tsx",
                        lineNumber: 1384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-2.5 rounded bg-cyan-500/30 border border-cyan-400 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                lineNumber: 1389,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-cyan-400",
                                children: [
                                    "GOAL (",
                                    mazeData.width - 1,
                                    ",",
                                    mazeData.height - 1,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                lineNumber: 1390,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MazeCanvas.tsx",
                        lineNumber: 1388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3.5 h-1 bg-rose-500 rounded-full shrink-0 shadow-[0_0_6px_rgba(244,63,94,0.6)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                lineNumber: 1395,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-rose-300",
                                children: "Virtual Wall"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                lineNumber: 1396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MazeCanvas.tsx",
                        lineNumber: 1394,
                        columnNumber: 9
                    }, this),
                    isVisualizerEnabled && showExplored && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3.5 h-1 bg-purple-500/60 rounded-full shrink-0 shadow-[0_0_6px_rgba(168,85,247,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MazeCanvas.tsx",
                                        lineNumber: 1401,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-purple-300",
                                        children: "Explored Branch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MazeCanvas.tsx",
                                        lineNumber: 1402,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                lineNumber: 1400,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2.5 h-2.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.9)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MazeCanvas.tsx",
                                        lineNumber: 1405,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-400 font-medium",
                                        children: "Dead End (Red)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MazeCanvas.tsx",
                                        lineNumber: 1406,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                lineNumber: 1404,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MazeCanvas.tsx",
                        lineNumber: 1399,
                        columnNumber: 11
                    }, this),
                    isVisualizerEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3.5 h-1.5 bg-emerald-400 rounded-full shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.9)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                lineNumber: 1412,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-400 font-semibold",
                                children: "Optimal Path (Green)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MazeCanvas.tsx",
                                lineNumber: 1413,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MazeCanvas.tsx",
                        lineNumber: 1411,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MazeCanvas.tsx",
                lineNumber: 1380,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MazeCanvas.tsx",
        lineNumber: 1129,
        columnNumber: 5
    }, this);
}
_s(MazeCanvas, "sCW0kc9a3G7QVgTBa/MTrs7GeVg=");
_c = MazeCanvas;
var _c;
__turbopack_context__.k.register(_c, "MazeCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left-right.mjs [app-client] (ecmascript) <export default as ArrowLeftRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.mjs [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/columns-2.mjs [app-client] (ecmascript) <export default as Columns2>");
'use client';
;
;
function Navbar({ activeTab, onChangeTab, layoutMode, onToggleLayout, panelRatio, onChangePanelRatio }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "border-b border-slate-800 bg-[#0c121e]/95 backdrop-blur-md sticky top-0 z-30 px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-600/20 text-white shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-bold text-slate-100 text-sm tracking-tight",
                                    children: "Maze Runner"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-mono uppercase bg-cyan-950 text-cyan-400 border border-cyan-800/80 px-2 py-0.5 rounded-full font-semibold",
                                    children: "Robotics Sim"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChangeTab('simulator'),
                        className: `flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${activeTab === 'simulator' ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20' : 'text-slate-400 hover:text-slate-200'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Simulator Workbench"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChangeTab('guide'),
                        className: `flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${activeTab === 'guide' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' : 'text-slate-400 hover:text-slate-200'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Getting Started & Guide"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] bg-indigo-500/30 text-indigo-300 px-1.5 py-0.2 rounded-full font-bold ml-0.5",
                                children: "Docs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs",
                children: [
                    activeTab === 'simulator' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onChangePanelRatio('wide'),
                                        title: "Wide Simulation Canvas (65% width)",
                                        className: `flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium transition-colors ${panelRatio === 'wide' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns2$3e$__["Columns2"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Wide"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onChangePanelRatio('balanced'),
                                        title: "Balanced 50/50 View",
                                        className: `flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium transition-colors ${panelRatio === 'balanced' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "50/50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onChangePanelRatio('focus-maze'),
                                        title: "Full Canvas Focus",
                                        className: `flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium transition-colors ${panelRatio === 'focus-maze' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Focus"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            panelRatio !== 'focus-maze' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggleLayout,
                                title: "Swap Left/Right Panels",
                                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"], {
                                        className: "w-3.5 h-3.5 text-cyan-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: layoutMode === 'maze-left' ? 'Maze: Left' : 'Maze: Right'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden xl:flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-400 font-mono text-[11px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                className: "w-3.5 h-3.5 text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Pyodide WASM"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/algorithmPresets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALGORITHM_PRESETS",
    ()=>ALGORITHM_PRESETS
]);
const ALGORITHM_PRESETS = [
    {
        id: 'bfs',
        name: 'Breadth-First Search (BFS)',
        difficulty: 'Intermediate',
        complexity: 'O(V + E) — Optimal / Shortest Path',
        description: 'Explores the maze level-by-level using a FIFO queue. BFS is guaranteed to find the path with the fewest motor actions or shortest distance, making it the benchmark in autonomous competitions.',
        keyFeatures: [
            'Guarantees shortest path to target beacon',
            'Tracks (x, y, heading) state space to minimize motor turns',
            'Uses deque for efficient O(1) popping'
        ],
        code: `"""
ALGORITHM: Breadth-First Search (BFS)
-------------------------------------
- Guarantees the shortest path from start_node to end_node.
- State: (x, y, heading)
- Queue explores paths layer by layer.
"""

from collections import deque

WALL_NORTH = 1
WALL_EAST  = 2
WALL_SOUTH = 4
WALL_WEST  = 8

DIRECTIONS = ['N', 'E', 'S', 'W']
DIR_OFFSETS = {
    'N': (0, -1, WALL_NORTH),
    'E': (1, 0, WALL_EAST),
    'S': (0, 1, WALL_SOUTH),
    'W': (-1, 0, WALL_WEST)
}

def solve():
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    start = tuple(MAZE_DATA["start_node"])
    target = tuple(MAZE_DATA["end_node"])
    grid = MAZE_DATA["grid"]

    # Queue holds: (x, y, heading, [list of commands])
    queue = deque([(start[0], start[1], 'E', [])])
    visited = set([(start[0], start[1], 'E')])

    while queue:
        x, y, heading, path = queue.popleft()

        # Goal reached!
        if (x, y) == target:
            print(f"Goal reached! Total motor commands: {len(path)}")
            return path

        cur_walls = grid[y][x]

        # 1. Drive FORWARD if no virtual wall is ahead
        dx, dy, wall_mask = DIR_OFFSETS[heading]
        nx, ny = x + dx, y + dy
        if not (cur_walls & wall_mask) and 0 <= nx < width and 0 <= ny < height:
            state = (nx, ny, heading)
            if state not in visited:
                visited.add(state)
                queue.append((nx, ny, heading, path + ['FORWARD']))

        # 2. Pivot in-place LEFT
        left_heading = DIRECTIONS[(DIRECTIONS.index(heading) - 1) % 4]
        state = (x, y, left_heading)
        if state not in visited:
            visited.add(state)
            queue.append((x, y, left_heading, path + ['LEFT']))

        # 3. Pivot in-place RIGHT
        right_heading = DIRECTIONS[(DIRECTIONS.index(heading) + 1) % 4]
        state = (x, y, right_heading)
        if state not in visited:
            visited.add(state)
            queue.append((x, y, right_heading, path + ['RIGHT']))

    print("No route found to end node!")
    return []
`
    },
    {
        id: 'astar',
        name: 'A* (A-Star) Search Algorithm',
        difficulty: 'Advanced',
        complexity: 'O(E) with Manhattan Heuristic — Fast & Optimal',
        description: 'Uses Manhattan distance heuristic h(n) = |x - target_x| + |y - target_y| to prioritize nodes pointing toward the finish beacon. Much faster on larger mazes.',
        keyFeatures: [
            'Heuristic guidance towards target coordinates',
            'Priority queue (min-heap) based evaluation',
            'Ideal for large grid competitions'
        ],
        code: `"""
ALGORITHM: A* Search (Manhattan Distance Heuristic)
---------------------------------------------------
- Uses f(n) = g(n) + h(n)
  g(n) = cost from start (number of commands)
  h(n) = Manhattan distance to target
- Priority queue yields optimal path while exploring fewer nodes than BFS.
"""

import heapq

WALL_NORTH = 1
WALL_EAST  = 2
WALL_SOUTH = 4
WALL_WEST  = 8

DIRECTIONS = ['N', 'E', 'S', 'W']
DIR_OFFSETS = {
    'N': (0, -1, WALL_NORTH),
    'E': (1, 0, WALL_EAST),
    'S': (0, 1, WALL_SOUTH),
    'W': (-1, 0, WALL_WEST)
}

def heuristic(x, y, tx, ty):
    return abs(x - tx) + abs(y - ty)

def solve():
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    tx, ty = MAZE_DATA["end_node"]
    start_x, start_y = MAZE_DATA["start_node"]
    grid = MAZE_DATA["grid"]

    # Priority queue item: (f_score, g_cost, counter, x, y, heading, path)
    counter = 0
    start_h = heuristic(start_x, start_y, tx, ty)
    open_set = [(start_h, 0, counter, start_x, start_y, 'E', [])]
    visited_costs = {(start_x, start_y, 'E'): 0}

    while open_set:
        f, g, _, x, y, heading, path = heapq.heappop(open_set)

        if (x, y) == (tx, ty):
            print(f"A* found optimal path! Total actions: {len(path)}")
            return path

        if g > visited_costs.get((x, y, heading), float('inf')):
            continue

        cur_walls = grid[y][x]

        # 1. Forward motion
        dx, dy, wall_mask = DIR_OFFSETS[heading]
        nx, ny = x + dx, y + dy
        if not (cur_walls & wall_mask) and 0 <= nx < width and 0 <= ny < height:
            state = (nx, ny, heading)
            new_g = g + 1
            if new_g < visited_costs.get(state, float('inf')):
                visited_costs[state] = new_g
                counter += 1
                f_score = new_g + heuristic(nx, ny, tx, ty)
                heapq.heappush(open_set, (f_score, new_g, counter, nx, ny, heading, path + ['FORWARD']))

        # 2. Turn LEFT
        left_h = DIRECTIONS[(DIRECTIONS.index(heading) - 1) % 4]
        state = (x, y, left_h)
        new_g = g + 1
        if new_g < visited_costs.get(state, float('inf')):
            visited_costs[state] = new_g
            counter += 1
            f_score = new_g + heuristic(x, y, tx, ty)
            heapq.heappush(open_set, (f_score, new_g, counter, x, y, left_h, path + ['LEFT']))

        # 3. Turn RIGHT
        right_h = DIRECTIONS[(DIRECTIONS.index(heading) + 1) % 4]
        state = (x, y, right_h)
        new_g = g + 1
        if new_g < visited_costs.get(state, float('inf')):
            visited_costs[state] = new_g
            counter += 1
            f_score = new_g + heuristic(x, y, tx, ty)
            heapq.heappush(open_set, (f_score, new_g, counter, x, y, right_h, path + ['RIGHT']))

    print("A* could not reach target.")
    return []
`
    },
    {
        id: 'dfs',
        name: 'Depth-First Search (DFS)',
        difficulty: 'Beginner',
        complexity: 'O(V + E) — Memory Efficient Exploration',
        description: 'Explores as deep as possible down each branch before backtracking. Great for understanding maze recursion and stack-based decision making.',
        keyFeatures: [
            'Simple LIFO stack-based exploration',
            'Low memory footprint',
            'Demonstrates non-optimal vs optimal path comparison'
        ],
        code: `"""
ALGORITHM: Depth-First Search (DFS)
-----------------------------------
- Deep exploration algorithm using a LIFO stack.
- Does not guarantee the shortest path, but finds a valid path quickly.
"""

WALL_NORTH = 1
WALL_EAST  = 2
WALL_SOUTH = 4
WALL_WEST  = 8

DIRECTIONS = ['N', 'E', 'S', 'W']
DIR_OFFSETS = {
    'N': (0, -1, WALL_NORTH),
    'E': (1, 0, WALL_EAST),
    'S': (0, 1, WALL_SOUTH),
    'W': (-1, 0, WALL_WEST)
}

def solve():
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    tx, ty = MAZE_DATA["end_node"]
    start_x, start_y = MAZE_DATA["start_node"]
    grid = MAZE_DATA["grid"]

    # Stack holds: (x, y, heading, path)
    stack = [(start_x, start_y, 'E', [])]
    visited = set([(start_x, start_y, 'E')])

    while stack:
        x, y, heading, path = stack.pop()

        if (x, y) == (tx, ty):
            print(f"DFS Path found! Total commands: {len(path)}")
            return path

        cur_walls = grid[y][x]

        # Branch out into neighbors
        # Option 1: Turn Left
        left_h = DIRECTIONS[(DIRECTIONS.index(heading) - 1) % 4]
        if (x, y, left_h) not in visited:
            visited.add((x, y, left_h))
            stack.append((x, y, left_h, path + ['LEFT']))

        # Option 2: Turn Right
        right_h = DIRECTIONS[(DIRECTIONS.index(heading) + 1) % 4]
        if (x, y, right_h) not in visited:
            visited.add((x, y, right_h))
            stack.append((x, y, right_h, path + ['RIGHT']))

        # Option 3: Move Forward
        dx, dy, wall_mask = DIR_OFFSETS[heading]
        nx, ny = x + dx, y + dy
        if not (cur_walls & wall_mask) and 0 <= nx < width and 0 <= ny < height:
            if (nx, ny, heading) not in visited:
                visited.add((nx, ny, heading))
                stack.append((nx, ny, heading, path + ['FORWARD']))

    print("DFS completed with no path.")
    return []
`
    },
    {
        id: 'wall_follower',
        name: 'Left-Hand Wall Follower (Rule-Based)',
        difficulty: 'Intermediate',
        complexity: 'Reactive Sensor Logic',
        description: 'A classic reactive robotics strategy: keep your left hand touching the wall at all times. If there is an opening to your left, turn left and drive forward. Otherwise, drive forward if clear, or turn right.',
        keyFeatures: [
            'Simulates on-board physical wall sensors',
            'Solves standard simply-connected mazes',
            'Great for studying robotics edge-cases'
        ],
        code: `"""
ALGORITHM: Left-Hand Wall Follower
----------------------------------
- Emulates a physical micromouse / rover robot using left-side wall sensors.
- Decision Priority:
  1. If left is open: Turn LEFT and move FORWARD.
  2. Else if front is open: Move FORWARD.
  3. Else if right is open: Turn RIGHT and move FORWARD.
  4. Else dead end: U_TURN and move FORWARD.
"""

WALL_NORTH = 1
WALL_EAST  = 2
WALL_SOUTH = 4
WALL_WEST  = 8

DIRECTIONS = ['N', 'E', 'S', 'W']
DIR_OFFSETS = {
    'N': (0, -1, WALL_NORTH),
    'E': (1, 0, WALL_EAST),
    'S': (0, 1, WALL_SOUTH),
    'W': (-1, 0, WALL_WEST)
}

def is_wall(grid, x, y, heading, width, height):
    cur_walls = grid[y][x]
    dx, dy, mask = DIR_OFFSETS[heading]
    nx, ny = x + dx, y + dy
    if nx < 0 or nx >= width or ny < 0 or ny >= height:
        return True
    return bool(cur_walls & mask)

def solve():
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    tx, ty = MAZE_DATA["end_node"]
    x, y = MAZE_DATA["start_node"]
    heading = 'E'
    grid = MAZE_DATA["grid"]

    commands = []
    max_steps = 1000
    step_count = 0

    while (x, y) != (tx, ty) and step_count < max_steps:
        step_count += 1
        
        # Directions relative to current heading
        cur_idx = DIRECTIONS.index(heading)
        left_h = DIRECTIONS[(cur_idx - 1) % 4]
        front_h = heading
        right_h = DIRECTIONS[(cur_idx + 1) % 4]

        # 1. Can we turn left?
        if not is_wall(grid, x, y, left_h, width, height):
            commands.append('LEFT')
            commands.append('FORWARD')
            heading = left_h
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        # 2. Can we move straight?
        elif not is_wall(grid, x, y, front_h, width, height):
            commands.append('FORWARD')
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        # 3. Can we turn right?
        elif not is_wall(grid, x, y, right_h, width, height):
            commands.append('RIGHT')
            commands.append('FORWARD')
            heading = right_h
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        # 4. Dead end: Turn around
        else:
            commands.append('U_TURN')
            heading = DIRECTIONS[(cur_idx + 2) % 4]

    print(f"Wall Follower completed in {len(commands)} actions!")
    return commands
`
    },
    {
        id: 'dijkstra',
        name: "Dijkstra's Algorithm (Weighted Graph)",
        difficulty: 'Intermediate',
        complexity: 'O((V + E) log V) — Uniform-Cost / Weighted Search',
        description: 'Explores paths in order of minimal accumulated edge weight/cost g(n). Guarantees the absolute lowest-cost path in weighted environments without requiring heuristics.',
        keyFeatures: [
            'Min-heap priority queue ordered strictly by accumulated cost g(n)',
            'Assigns exact numerical weight / distance to every reached node',
            'Benchmark comparison against unweighted BFS and heuristic A*'
        ],
        code: `"""
ALGORITHM: Dijkstra's Algorithm (Uniform-Cost Weighted Search)
--------------------------------------------------------------
- Explores cells strictly by lowest accumulated cost g(n).
- Moving FORWARD has an edge weight of 1.
- Turning LEFT or RIGHT has an edge weight of 1.
- Tracks visited_costs dict for exact node weight values.
"""

import heapq

WALL_NORTH = 1
WALL_EAST  = 2
WALL_SOUTH = 4
WALL_WEST  = 8

DIRECTIONS = ['N', 'E', 'S', 'W']
DIR_OFFSETS = {
    'N': (0, -1, WALL_NORTH),
    'E': (1, 0, WALL_EAST),
    'S': (0, 1, WALL_SOUTH),
    'W': (-1, 0, WALL_WEST)
}

def solve():
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    tx, ty = MAZE_DATA["end_node"]
    start_x, start_y = MAZE_DATA["start_node"]
    grid = MAZE_DATA["grid"]

    # Priority queue stores: (g_cost, counter, x, y, heading, path)
    counter = 0
    pq = [(0, counter, start_x, start_y, 'E', [])]
    visited_costs = {(start_x, start_y, 'E'): 0}

    while pq:
        g, _, x, y, heading, path = heapq.heappop(pq)

        if (x, y) == (tx, ty):
            print(f"Dijkstra found optimal path with total cost {g}! Total commands: {len(path)}")
            return path

        if g > visited_costs.get((x, y, heading), float('inf')):
            continue

        cur_walls = grid[y][x]

        # 1. Action: FORWARD (Cost = +1)
        dx, dy, wall_mask = DIR_OFFSETS[heading]
        nx, ny = x + dx, y + dy
        if not (cur_walls & wall_mask) and 0 <= nx < width and 0 <= ny < height:
            state = (nx, ny, heading)
            new_g = g + 1
            if new_g < visited_costs.get(state, float('inf')):
                visited_costs[state] = new_g
                counter += 1
                heapq.heappush(pq, (new_g, counter, nx, ny, heading, path + ['FORWARD']))

        # 2. Action: Turn LEFT (Cost = +1)
        left_h = DIRECTIONS[(DIRECTIONS.index(heading) - 1) % 4]
        state = (x, y, left_h)
        new_g = g + 1
        if new_g < visited_costs.get(state, float('inf')):
            visited_costs[state] = new_g
            counter += 1
            heapq.heappush(pq, (new_g, counter, x, y, left_h, path + ['LEFT']))

        # 3. Action: Turn RIGHT (Cost = +1)
        right_h = DIRECTIONS[(DIRECTIONS.index(heading) + 1) % 4]
        state = (x, y, right_h)
        new_g = g + 1
        if new_g < visited_costs.get(state, float('inf')):
            visited_costs[state] = new_g
            counter += 1
            heapq.heappush(pq, (new_g, counter, x, y, right_h, path + ['RIGHT']))

    print("Dijkstra could not find a path to the goal.")
    return []
`
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/algorithmVisualizer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractAlgorithmVisualizerData",
    ()=>extractAlgorithmVisualizerData,
    "generateSlimeMoldExploration",
    ()=>generateSlimeMoldExploration,
    "traceSolutionPath",
    ()=>traceSolutionPath
]);
const HEADING_DELTAS = {
    N: {
        dx: 0,
        dy: -1,
        wall: 1
    },
    E: {
        dx: 1,
        dy: 0,
        wall: 2
    },
    S: {
        dx: 0,
        dy: 1,
        wall: 4
    },
    W: {
        dx: -1,
        dy: 0,
        wall: 8
    }
};
const ROTATE_LEFT = {
    N: 'W',
    W: 'S',
    S: 'E',
    E: 'N'
};
const ROTATE_RIGHT = {
    N: 'E',
    E: 'S',
    S: 'W',
    W: 'N'
};
const ROTATE_UTURN = {
    N: 'S',
    S: 'N',
    E: 'W',
    W: 'E'
};
function traceSolutionPath(commands, mazeData) {
    const [sx, sy] = mazeData.start_node;
    const [tx, ty] = mazeData.end_node;
    let cx = sx;
    let cy = sy;
    let heading = 'E';
    const solutionPath = [
        [
            cx,
            cy
        ]
    ];
    const nodeMap = {};
    let stepCost = 0;
    const initialH = Math.abs(cx - tx) + Math.abs(cy - ty);
    nodeMap[`${cx},${cy}`] = {
        x: cx,
        y: cy,
        visitedOrder: 1,
        direction: heading,
        gCost: 0,
        hCost: initialH,
        fCost: initialH,
        isSolutionPath: true
    };
    for (const cmd of commands){
        if (cmd === 'FORWARD') {
            const delta = HEADING_DELTAS[heading];
            const nx = cx + delta.dx;
            const ny = cy + delta.dy;
            // Update current cell's exit direction
            if (nodeMap[`${cx},${cy}`]) {
                nodeMap[`${cx},${cy}`].direction = heading;
            }
            // Check bounds
            if (nx >= 0 && nx < mazeData.width && ny >= 0 && ny < mazeData.height) {
                cx = nx;
                cy = ny;
                stepCost++;
                solutionPath.push([
                    cx,
                    cy
                ]);
                const h = Math.abs(cx - tx) + Math.abs(cy - ty);
                nodeMap[`${cx},${cy}`] = {
                    x: cx,
                    y: cy,
                    visitedOrder: solutionPath.length,
                    direction: heading,
                    gCost: stepCost,
                    hCost: h,
                    fCost: stepCost + h,
                    isSolutionPath: true
                };
            }
        } else if (cmd === 'LEFT') {
            heading = ROTATE_LEFT[heading];
            if (nodeMap[`${cx},${cy}`]) {
                nodeMap[`${cx},${cy}`].direction = heading;
            }
        } else if (cmd === 'RIGHT') {
            heading = ROTATE_RIGHT[heading];
            if (nodeMap[`${cx},${cy}`]) {
                nodeMap[`${cx},${cy}`].direction = heading;
            }
        } else if (cmd === 'U_TURN') {
            heading = ROTATE_UTURN[heading];
            if (nodeMap[`${cx},${cy}`]) {
                nodeMap[`${cx},${cy}`].direction = heading;
            }
        }
    }
    return {
        solutionPath,
        nodeMap,
        maxCost: stepCost
    };
}
function generateSlimeMoldExploration(mazeData, algorithmType) {
    const { width, height, grid, start_node, end_node } = mazeData;
    const [sx, sy] = start_node;
    const [tx, ty] = end_node;
    const steps = [];
    const nodeMap = {};
    const parentMap = new Map();
    const childrenCount = new Map();
    const startKey = `${sx},${sy}`;
    const startH = Math.abs(sx - tx) + Math.abs(sy - ty);
    // Initial start step
    steps.push({
        step: 1,
        x: sx,
        y: sy,
        direction: 'E',
        gCost: 0,
        hCost: startH,
        fCost: startH,
        branchDepth: 0
    });
    nodeMap[startKey] = {
        x: sx,
        y: sy,
        visitedOrder: 1,
        direction: 'E',
        gCost: 0,
        hCost: startH,
        fCost: startH,
        branchDepth: 0
    };
    const directions = [
        {
            dir: 'E',
            dx: 1,
            dy: 0,
            wall: 2
        },
        {
            dir: 'S',
            dx: 0,
            dy: 1,
            wall: 4
        },
        {
            dir: 'W',
            dx: -1,
            dy: 0,
            wall: 8
        },
        {
            dir: 'N',
            dx: 0,
            dy: -1,
            wall: 1
        }
    ];
    if (algorithmType === 'astar' || algorithmType === 'dijkstra') {
        const pq = [
            {
                f: algorithmType === 'astar' ? startH : 0,
                g: 0,
                x: sx,
                y: sy,
                dir: 'E',
                depth: 0
            }
        ];
        const bestG = new Map();
        bestG.set(startKey, 0);
        let stepCounter = 1;
        while(pq.length > 0){
            // Pop lowest f/g
            pq.sort((a, b)=>a.f - b.f || a.g - b.g);
            const curr = pq.shift();
            const currKey = `${curr.x},${curr.y}`;
            if (curr.x === tx && curr.y === ty) {
                break; // Reached goal
            }
            const walls = grid[curr.y][curr.x];
            for (const { dir, dx, dy, wall } of directions){
                if (!(walls & wall)) {
                    const nx = curr.x + dx;
                    const ny = curr.y + dy;
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        const nextKey = `${nx},${ny}`;
                        const newG = curr.g + 1;
                        const prevG = bestG.get(nextKey) ?? Infinity;
                        if (newG < prevG) {
                            bestG.set(nextKey, newG);
                            stepCounter++;
                            const h = Math.abs(nx - tx) + Math.abs(ny - ty);
                            const f = algorithmType === 'astar' ? newG + h : newG;
                            const nextDepth = curr.depth + 1;
                            parentMap.set(nextKey, {
                                px: curr.x,
                                py: curr.y,
                                dir,
                                g: newG,
                                depth: nextDepth
                            });
                            childrenCount.set(currKey, (childrenCount.get(currKey) || 0) + 1);
                            steps.push({
                                step: stepCounter,
                                x: nx,
                                y: ny,
                                parentX: curr.x,
                                parentY: curr.y,
                                direction: dir,
                                gCost: newG,
                                hCost: h,
                                fCost: f,
                                branchDepth: nextDepth
                            });
                            nodeMap[nextKey] = {
                                x: nx,
                                y: ny,
                                visitedOrder: stepCounter,
                                parentX: curr.x,
                                parentY: curr.y,
                                direction: dir,
                                gCost: newG,
                                hCost: h,
                                fCost: f,
                                branchDepth: nextDepth
                            };
                            pq.push({
                                f,
                                g: newG,
                                x: nx,
                                y: ny,
                                dir,
                                depth: nextDepth
                            });
                        }
                    }
                }
            }
        }
    } else if (algorithmType === 'dfs') {
        // Depth-First Search
        const stack = [
            {
                x: sx,
                y: sy,
                dir: 'E',
                depth: 0,
                g: 0
            }
        ];
        const visited = new Set([
            startKey
        ]);
        let stepCounter = 1;
        while(stack.length > 0){
            const curr = stack.pop();
            const currKey = `${curr.x},${curr.y}`;
            if (curr.x === tx && curr.y === ty) {
                break;
            }
            const walls = grid[curr.y][curr.x];
            for (const { dir, dx, dy, wall } of directions){
                if (!(walls & wall)) {
                    const nx = curr.x + dx;
                    const ny = curr.y + dy;
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        const nextKey = `${nx},${ny}`;
                        if (!visited.has(nextKey)) {
                            visited.add(nextKey);
                            stepCounter++;
                            const newG = curr.g + 1;
                            const h = Math.abs(nx - tx) + Math.abs(ny - ty);
                            const nextDepth = curr.depth + 1;
                            parentMap.set(nextKey, {
                                px: curr.x,
                                py: curr.y,
                                dir,
                                g: newG,
                                depth: nextDepth
                            });
                            childrenCount.set(currKey, (childrenCount.get(currKey) || 0) + 1);
                            steps.push({
                                step: stepCounter,
                                x: nx,
                                y: ny,
                                parentX: curr.x,
                                parentY: curr.y,
                                direction: dir,
                                gCost: newG,
                                hCost: h,
                                fCost: newG + h,
                                branchDepth: nextDepth
                            });
                            nodeMap[nextKey] = {
                                x: nx,
                                y: ny,
                                visitedOrder: stepCounter,
                                parentX: curr.x,
                                parentY: curr.y,
                                direction: dir,
                                gCost: newG,
                                hCost: h,
                                fCost: newG + h,
                                branchDepth: nextDepth
                            };
                            stack.push({
                                x: nx,
                                y: ny,
                                dir,
                                depth: nextDepth,
                                g: newG
                            });
                        }
                    }
                }
            }
        }
    } else {
        // Breadth-First Search (FIFO Queue)
        const queue = [
            {
                x: sx,
                y: sy,
                dir: 'E',
                depth: 0,
                g: 0
            }
        ];
        const visited = new Set([
            startKey
        ]);
        let stepCounter = 1;
        while(queue.length > 0){
            const curr = queue.shift();
            const currKey = `${curr.x},${curr.y}`;
            if (curr.x === tx && curr.y === ty) {
                break;
            }
            const walls = grid[curr.y][curr.x];
            for (const { dir, dx, dy, wall } of directions){
                if (!(walls & wall)) {
                    const nx = curr.x + dx;
                    const ny = curr.y + dy;
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        const nextKey = `${nx},${ny}`;
                        if (!visited.has(nextKey)) {
                            visited.add(nextKey);
                            stepCounter++;
                            const newG = curr.g + 1;
                            const h = Math.abs(nx - tx) + Math.abs(ny - ty);
                            const nextDepth = curr.depth + 1;
                            parentMap.set(nextKey, {
                                px: curr.x,
                                py: curr.y,
                                dir,
                                g: newG,
                                depth: nextDepth
                            });
                            childrenCount.set(currKey, (childrenCount.get(currKey) || 0) + 1);
                            steps.push({
                                step: stepCounter,
                                x: nx,
                                y: ny,
                                parentX: curr.x,
                                parentY: curr.y,
                                direction: dir,
                                gCost: newG,
                                hCost: h,
                                fCost: newG + h,
                                branchDepth: nextDepth
                            });
                            nodeMap[nextKey] = {
                                x: nx,
                                y: ny,
                                visitedOrder: stepCounter,
                                parentX: curr.x,
                                parentY: curr.y,
                                direction: dir,
                                gCost: newG,
                                hCost: h,
                                fCost: newG + h,
                                branchDepth: nextDepth
                            };
                            queue.push({
                                x: nx,
                                y: ny,
                                dir,
                                depth: nextDepth,
                                g: newG
                            });
                        }
                    }
                }
            }
        }
    }
    // Reconstruct solution path by backtracking from end_node
    const goalKey = `${tx},${ty}`;
    const solutionPath = [];
    const winningKeys = new Set();
    if (parentMap.has(goalKey) || sx === tx && sy === ty) {
        let curr = goalKey;
        while(curr){
            const [xStr, yStr] = curr.split(',');
            const px = parseInt(xStr, 10);
            const py = parseInt(yStr, 10);
            solutionPath.unshift([
                px,
                py
            ]);
            winningKeys.add(curr);
            const pInfo = parentMap.get(curr);
            if (pInfo) {
                curr = `${pInfo.px},${pInfo.py}`;
            } else {
                break;
            }
        }
    }
    // Mark winning path & dead-end tips on both steps and nodeMap
    let deadEndCount = 0;
    for (const step of steps){
        const key = `${step.x},${step.y}`;
        if (winningKeys.has(key)) {
            step.isWinningPath = true;
            if (nodeMap[key]) nodeMap[key].isSolutionPath = true;
        } else {
            step.isWinningPath = false;
            // If cell has no explored children and isn't the goal, it's a dead-end tip!
            const count = childrenCount.get(key) || 0;
            if (count === 0 && !(step.x === tx && step.y === ty)) {
                step.isDeadEnd = true;
                deadEndCount++;
                if (nodeMap[key]) nodeMap[key].isDeadEnd = true;
            }
        }
    }
    return {
        steps,
        nodeMap,
        solutionPath,
        deadEndCount
    };
}
function extractAlgorithmVisualizerData(pyodide, code, commands, mazeData) {
    let algorithmType = 'bfs';
    let hasWeights = false;
    let algorithmName = 'Breadth-First Search (BFS)';
    if (code.includes('heapq') && (code.includes('f_score') || code.includes('heuristic'))) {
        algorithmName = 'A* Search (Heuristic Weighted)';
        algorithmType = 'astar';
        hasWeights = true;
    } else if (code.includes('heapq') || code.includes('Dijkstra')) {
        algorithmName = "Dijkstra's Algorithm (Uniform-Cost)";
        algorithmType = 'dijkstra';
        hasWeights = true;
    } else if (code.includes('DFS') || code.includes('stack.pop()')) {
        algorithmName = 'Depth-First Search (DFS)';
        algorithmType = 'dfs';
    } else if (code.includes('Wall Follower') || code.includes('is_wall')) {
        algorithmName = 'Left-Hand Wall Follower (Reactive)';
        algorithmType = 'dfs';
    }
    // Generate full search tree with all tried paths and dead ends
    const sim = generateSlimeMoldExploration(mazeData, algorithmType);
    // Trace the exact commands executed by the user's Python solve()
    const traced = traceSolutionPath(commands, mazeData);
    // If user's executed path reached goal, use it as the final solutionPath
    const finalSolutionPath = traced.solutionPath.length > 1 ? traced.solutionPath : sim.solutionPath;
    // Mark all cells on finalSolutionPath as isSolutionPath
    const finalWinningKeys = new Set(finalSolutionPath.map(([x, y])=>`${x},${y}`));
    // Merge traced node direction vectors into the simulated map
    for (const [key, node] of Object.entries(traced.nodeMap)){
        if (sim.nodeMap[key]) {
            sim.nodeMap[key].direction = node.direction;
            sim.nodeMap[key].isSolutionPath = true;
        } else {
            sim.nodeMap[key] = node;
        }
    }
    for (const step of sim.steps){
        const key = `${step.x},${step.y}`;
        if (finalWinningKeys.has(key)) {
            step.isWinningPath = true;
            if (sim.nodeMap[key]) sim.nodeMap[key].isSolutionPath = true;
        }
    }
    let maxCost = 0;
    for (const node of Object.values(sim.nodeMap)){
        if (node.gCost && node.gCost > maxCost) {
            maxCost = node.gCost;
        }
    }
    return {
        algorithmName,
        hasWeights,
        nodes: sim.nodeMap,
        solutionPath: finalSolutionPath,
        explorationSteps: sim.steps,
        maxOrder: sim.steps.length,
        maxCost,
        deadEndCount: sim.deadEndCount,
        totalExplored: Object.keys(sim.nodeMap).length
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/beginnerLessons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BEGINNER_LESSONS",
    ()=>BEGINNER_LESSONS
]);
const BEGINNER_LESSONS = [
    {
        id: 'lesson_1_first_steps',
        title: 'Lesson 1: My First Robot Command',
        level: 'Beginner 101',
        objective: 'Learn how solve() returns a Python list of motor commands.',
        explanation: 'In Python, solve() is a function that outputs a list of strings. Each string instructs the rover to drive or turn.',
        code: `"""
LESSON 1: My First Robot Controller
------------------------------------
In Python, solve() must return a list of sequential commands.
Valid commands:
  - 'FORWARD' : Drive 1 cell forward
  - 'LEFT'    : Turn 90 degrees left
  - 'RIGHT'   : Turn 90 degrees right
  - 'U_TURN'  : Turn 180 degrees around

Try modifying the list below to see the robot move!
"""

def solve():
    print("Executing my first robot commands!")
    
    # Return a basic sequence of moves:
    return [
        'FORWARD',
        'RIGHT',
        'FORWARD',
        'LEFT',
        'FORWARD'
    ]
`
    },
    {
        id: 'lesson_2_loops_and_lists',
        title: 'Lesson 2: Using Loops & .append()',
        level: 'Beginner 102',
        objective: 'Generate repetitive commands using a Python for loop.',
        explanation: 'Instead of typing commands one by one, we create an empty list and use commands.append() inside a loop.',
        code: `"""
LESSON 2: Using Loops and Lists
--------------------------------
Instead of manually typing ['FORWARD', 'FORWARD', ...],
we start with an empty list: commands = []
and use a for loop with commands.append('FORWARD').
"""

def solve():
    print("Generating commands dynamically using a loop...")
    commands = []

    # Drive 3 steps forward
    for step in range(3):
        commands.append('FORWARD')
        print(f"Added forward step {step + 1}")

    # Turn right, drive 2 more steps
    commands.append('RIGHT')
    for step in range(2):
        commands.append('FORWARD')

    return commands
`
    },
    {
        id: 'lesson_3_reading_walls',
        title: 'Lesson 3: Reading Walls with Bitwise (&)',
        level: 'Beginner 103',
        objective: 'Inspect the cell at (0, 0) and decide whether to turn or move forward.',
        explanation: 'MAZE_DATA["grid"][y][x] gives an integer with walls encoded: 1=North, 2=East, 4=South, 8=West. Using (walls & 2) tells you if the East wall exists!',
        code: `"""
LESSON 3: Detecting Virtual Walls
---------------------------------
Bitwise values:
  WALL_NORTH = 1
  WALL_EAST  = 2
  WALL_SOUTH = 4
  WALL_WEST  = 8

If (current_walls & 2) != 0, it means the East wall is BLOCKED.
If (current_walls & 2) == 0, the East wall is OPEN!
"""

def solve():
    x, y = MAZE_DATA["start_node"]  # Start at (0, 0)
    current_walls = MAZE_DATA["grid"][y][x]
    
    print(f"Cell ({x}, {y}) wall integer value: {current_walls}")
    
    commands = []

    # Check if East (right) is open:
    if not (current_walls & 2):
        print("East is open! Moving forward.")
        commands.append('FORWARD')
    else:
        print("East is blocked by a wall! Turning South (Right).")
        commands.append('RIGHT')
        commands.append('FORWARD')

    return commands
`
    },
    {
        id: 'lesson_4_simple_wall_follower',
        title: 'Lesson 4: A Simple Wall-Following Loop',
        level: 'Beginner 104',
        objective: 'Build an autonomous reactive robot using a while loop until the goal is reached.',
        explanation: 'We loop while (x, y) != target, checking walls and turning left, straight, or right.',
        code: `"""
LESSON 4: The Reactive Left-Hand Wall Follower
----------------------------------------------
A while loop repeats until the robot reaches MAZE_DATA["end_node"].
Rule:
  1. Try to turn LEFT and move FORWARD.
  2. If blocked, move straight FORWARD.
  3. If blocked, turn RIGHT and move FORWARD.
  4. If blocked on all 3 sides, U_TURN!
"""

DIRECTIONS = ['N', 'E', 'S', 'W']
DIR_OFFSETS = {
    'N': (0, -1, 1), # (dx, dy, wall_mask)
    'E': (1, 0, 2),
    'S': (0, 1, 4),
    'W': (-1, 0, 8)
}

def solve():
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    target = tuple(MAZE_DATA["end_node"])
    x, y = MAZE_DATA["start_node"]
    heading = 'E'
    grid = MAZE_DATA["grid"]

    commands = []
    steps = 0

    while (x, y) != target and steps < 800:
        steps += 1
        cur_idx = DIRECTIONS.index(heading)
        left_h = DIRECTIONS[(cur_idx - 1) % 4]
        right_h = DIRECTIONS[(cur_idx + 1) % 4]

        # Function to test if a direction has a wall:
        def has_wall(h):
            _, _, mask = DIR_OFFSETS[h]
            return bool(grid[y][x] & mask)

        # 1. Turn Left if open
        if not has_wall(left_h):
            commands.append('LEFT')
            commands.append('FORWARD')
            heading = left_h
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        # 2. Go straight if open
        elif not has_wall(heading):
            commands.append('FORWARD')
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        # 3. Turn Right if open
        elif not has_wall(right_h):
            commands.append('RIGHT')
            commands.append('FORWARD')
            heading = right_h
            dx, dy, _ = DIR_OFFSETS[heading]
            x, y = x + dx, y + dy
        # 4. Turn around
        else:
            commands.append('U_TURN')
            heading = DIRECTIONS[(cur_idx + 2) % 4]

    print(f"Wall follower reached target in {len(commands)} commands!")
    return commands
`
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/defaultPythonCode.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PYTHON_CODE",
    ()=>DEFAULT_PYTHON_CODE
]);
const DEFAULT_PYTHON_CODE = `"""
MAZE RUNNER - Autonomous Cell-Based Maze Solver
------------------------------------------------
Environment Context:
- MAZE_DATA: Global dictionary with environment info:
    - MAZE_DATA["width"]: grid width (number of cell columns)
    - MAZE_DATA["height"]: grid height (number of cell rows)
    - MAZE_DATA["start_node"]: [x, y] coordinates of START cell [0, 0]
    - MAZE_DATA["end_node"]: [x, y] coordinates of GOAL cell [width-1, height-1]
    - MAZE_DATA["grid"]: 2D array [height][width] of cell wall bitmasks:
        1 = NORTH wall of cell (y - 1)
        2 = EAST wall of cell  (x + 1)
        4 = SOUTH wall of cell (y + 1)
        8 = WEST wall of cell  (x - 1)

Movement Rules:
- The robot is located INSIDE the cell and travels from cell to cell.
- 'FORWARD': Moves inside cell along current heading to the adjacent cell.
- 'LEFT' / 'RIGHT' / 'U_TURN': Pivots in-place inside the current cell.
- Initial state: Start cell [0, 0] facing 'E' (East).
"""

from collections import deque

WALL_NORTH = 1
WALL_EAST  = 2
WALL_SOUTH = 4
WALL_WEST  = 8

DIRECTIONS = ['N', 'E', 'S', 'W']
DIR_OFFSETS = {
    'N': (0, -1, WALL_NORTH),
    'E': (1, 0, WALL_EAST),
    'S': (0, 1, WALL_SOUTH),
    'W': (-1, 0, WALL_WEST)
}

def solve():
    print(f"Solving maze: Start cell {MAZE_DATA['start_node']} -> Goal cell {MAZE_DATA['end_node']}")
    width = MAZE_DATA["width"]
    height = MAZE_DATA["height"]
    start = tuple(MAZE_DATA["start_node"])
    target = tuple(MAZE_DATA["end_node"])
    grid = MAZE_DATA["grid"]

    # Shortest path BFS with state: (x, y, heading)
    queue = deque([(start[0], start[1], 'E', [])])
    visited = set([(start[0], start[1], 'E')])

    while queue:
        x, y, heading, path = queue.popleft()
        
        # Reached the goal cell!
        if (x, y) == target:
            print(f"Goal reached! Total motor commands: {len(path)}")
            return path
            
        cur_walls = grid[y][x]
        
        # 1. Drive FORWARD into adjacent cell if no wall
        dx, dy, wall_mask = DIR_OFFSETS[heading]
        nx, ny = x + dx, y + dy
        if not (cur_walls & wall_mask) and 0 <= nx < width and 0 <= ny < height:
            state = (nx, ny, heading)
            if state not in visited:
                visited.add(state)
                queue.append((nx, ny, heading, path + ['FORWARD']))

        # 2. Pivot in-place LEFT
        left_heading = DIRECTIONS[(DIRECTIONS.index(heading) - 1) % 4]
        state = (x, y, left_heading)
        if state not in visited:
            visited.add(state)
            queue.append((x, y, left_heading, path + ['LEFT']))

        # 3. Pivot in-place RIGHT
        right_heading = DIRECTIONS[(DIRECTIONS.index(heading) + 1) % 4]
        state = (x, y, right_heading)
        if state not in visited:
            visited.add(state)
            queue.append((x, y, right_heading, path + ['RIGHT']))

    print("No valid path found to goal cell!")
    return []
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/mazeGenerator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DIR_DELTA",
    ()=>DIR_DELTA,
    "OPPOSITE_WALL",
    ()=>OPPOSITE_WALL,
    "WALL_EAST",
    ()=>WALL_EAST,
    "WALL_NORTH",
    ()=>WALL_NORTH,
    "WALL_SOUTH",
    ()=>WALL_SOUTH,
    "WALL_WEST",
    ()=>WALL_WEST,
    "generateBlankArena",
    ()=>generateBlankArena,
    "generateBraidedMaze",
    ()=>generateBraidedMaze
]);
const WALL_NORTH = 1;
const WALL_EAST = 2;
const WALL_SOUTH = 4;
const WALL_WEST = 8;
const OPPOSITE_WALL = {
    [WALL_NORTH]: WALL_SOUTH,
    [WALL_EAST]: WALL_WEST,
    [WALL_SOUTH]: WALL_NORTH,
    [WALL_WEST]: WALL_EAST
};
const DIR_DELTA = {
    [WALL_NORTH]: [
        0,
        -1
    ],
    [WALL_EAST]: [
        1,
        0
    ],
    [WALL_SOUTH]: [
        0,
        1
    ],
    [WALL_WEST]: [
        -1,
        0
    ]
};
function generateBlankArena(width = 10, height = 10) {
    const w = Math.max(3, Math.min(30, width));
    const h = Math.max(3, Math.min(30, height));
    const grid = Array.from({
        length: h
    }, (_, y)=>Array.from({
            length: w
        }, (_, x)=>{
            let mask = 0;
            if (y === 0) mask |= WALL_NORTH;
            if (y === h - 1) mask |= WALL_SOUTH;
            if (x === 0) mask |= WALL_WEST;
            if (x === w - 1) mask |= WALL_EAST;
            return mask;
        }));
    return {
        width: w,
        height: h,
        grid,
        start_node: [
            0,
            0
        ],
        end_node: [
            w - 1,
            h - 1
        ]
    };
}
function generateBraidedMaze(width = 10, height = 10, braidRatio = 0.5) {
    // Clamp dimensions
    const w = Math.max(3, Math.min(30, width));
    const h = Math.max(3, Math.min(30, height));
    // Initialize with all walls present (1 | 2 | 4 | 8 = 15)
    const grid = Array.from({
        length: h
    }, ()=>Array.from({
            length: w
        }, ()=>WALL_NORTH | WALL_EAST | WALL_SOUTH | WALL_WEST));
    const visited = Array.from({
        length: h
    }, ()=>Array.from({
            length: w
        }, ()=>false));
    // Randomized Depth-First Search / Recursive Backtracker
    const stack = [];
    const startX = 0;
    const startY = 0;
    visited[startY][startX] = true;
    stack.push([
        startX,
        startY
    ]);
    const directions = [
        WALL_NORTH,
        WALL_EAST,
        WALL_SOUTH,
        WALL_WEST
    ];
    while(stack.length > 0){
        const [cx, cy] = stack[stack.length - 1];
        // Shuffle directions
        const shuffledDirs = [
            ...directions
        ].sort(()=>Math.random() - 0.5);
        let carved = false;
        for (const dir of shuffledDirs){
            const [dx, dy] = DIR_DELTA[dir];
            const nx = cx + dx;
            const ny = cy + dy;
            if (nx >= 0 && nx < w && ny >= 0 && ny < h && !visited[ny][nx]) {
                // Remove wall between current cell and neighbor
                grid[cy][cx] &= ~dir;
                grid[ny][nx] &= ~OPPOSITE_WALL[dir];
                visited[ny][nx] = true;
                stack.push([
                    nx,
                    ny
                ]);
                carved = true;
                break;
            }
        }
        if (!carved) {
            stack.pop();
        }
    }
    // Braid the maze: identify dead-ends (cells with 3 walls = 1 passage)
    // and knock down walls based on braidRatio
    if (braidRatio > 0) {
        const deadEnds = [];
        for(let y = 0; y < h; y++){
            for(let x = 0; x < w; x++){
                // Count number of walls intact
                let wallCount = 0;
                if (grid[y][x] & WALL_NORTH) wallCount++;
                if (grid[y][x] & WALL_EAST) wallCount++;
                if (grid[y][x] & WALL_SOUTH) wallCount++;
                if (grid[y][x] & WALL_WEST) wallCount++;
                if (wallCount === 3) {
                    // It is a dead end
                    deadEnds.push([
                        x,
                        y
                    ]);
                }
            }
        }
        // Shuffle dead ends
        deadEnds.sort(()=>Math.random() - 0.5);
        const removeCount = Math.round(deadEnds.length * braidRatio);
        for(let i = 0; i < removeCount; i++){
            const [x, y] = deadEnds[i];
            // Find candidate walls that lead to adjacent in-bounds cells
            const candidates = [];
            for (const dir of directions){
                if (grid[y][x] & dir) {
                    const [dx, dy] = DIR_DELTA[dir];
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                        candidates.push(dir);
                    }
                }
            }
            if (candidates.length > 0) {
                const chosenDir = candidates[Math.floor(Math.random() * candidates.length)];
                const [dx, dy] = DIR_DELTA[chosenDir];
                const nx = x + dx;
                const ny = y + dy;
                grid[y][x] &= ~chosenDir;
                grid[ny][nx] &= ~OPPOSITE_WALL[chosenDir];
            }
        }
    }
    // Ensure border walls remain strictly closed
    for(let x = 0; x < w; x++){
        grid[0][x] |= WALL_NORTH;
        grid[h - 1][x] |= WALL_SOUTH;
    }
    for(let y = 0; y < h; y++){
        grid[y][0] |= WALL_WEST;
        grid[y][w - 1] |= WALL_EAST;
    }
    return {
        width: w,
        height: h,
        grid,
        start_node: [
            0,
            0
        ],
        end_node: [
            w - 1,
            h - 1
        ]
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/monacoIntellisense.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupMonacoIntelliSense",
    ()=>setupMonacoIntelliSense
]);
/**
 * Monaco Editor IntelliSense & Text Prediction Configuration for Maze Runner IDE
 * Provides rich autocompletions, AI-like inline ghost text predictions, snippet expansions,
 * and documentation tooltips for Python and Maze Runner specific commands/data.
 */ // Track registration so we only register providers once globally for Monaco
let isIntelliSenseRegistered = false;
function setupMonacoIntelliSense(monaco) {
    if (isIntelliSenseRegistered || !monaco) return;
    isIntelliSenseRegistered = true;
    // 1. Register Completion Items Provider (Dropdown autocomplete & predictions)
    monaco.languages.registerCompletionItemProvider('python', {
        triggerCharacters: [
            '.',
            '[',
            "'",
            '"',
            '(',
            ':',
            ' ',
            '=',
            'F',
            'L',
            'R',
            'U',
            'M',
            's',
            'c',
            'w',
            'b',
            'd',
            'n',
            'e'
        ],
        provideCompletionItems: (model, position)=>{
            const lineContent = model.getLineContent(position.lineNumber);
            const textUntilPosition = lineContent.substring(0, position.column - 1);
            const word = model.getWordUntilPosition(position);
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            const suggestions = [];
            // === A. Robot Motion Commands ===
            const motionCommands = [
                {
                    label: "'FORWARD'",
                    insertText: "'FORWARD'",
                    detail: '🤖 Robot Command: Move forward 1 cell',
                    documentation: {
                        value: '**`FORWARD`**\n\nMoves the robot one cell ahead in its current heading orientation. If a virtual wall is in front, a **5-second collision penalty** is added and the robot stays in the cell.'
                    },
                    kind: monaco.languages.CompletionItemKind.EnumMember,
                    sortText: '001'
                },
                {
                    label: "'LEFT'",
                    insertText: "'LEFT'",
                    detail: '🤖 Robot Command: Turn 90° CCW',
                    documentation: {
                        value: '**`LEFT`**\n\nRotates the robot 90 degrees counter-clockwise (Left) in place without moving into another cell.'
                    },
                    kind: monaco.languages.CompletionItemKind.EnumMember,
                    sortText: '002'
                },
                {
                    label: "'RIGHT'",
                    insertText: "'RIGHT'",
                    detail: '🤖 Robot Command: Turn 90° CW',
                    documentation: {
                        value: '**`RIGHT`**\n\nRotates the robot 90 degrees clockwise (Right) in place without moving into another cell.'
                    },
                    kind: monaco.languages.CompletionItemKind.EnumMember,
                    sortText: '003'
                },
                {
                    label: "'U_TURN'",
                    insertText: "'U_TURN'",
                    detail: '🤖 Robot Command: Turn 180°',
                    documentation: {
                        value: '**`U_TURN`**\n\nRotates the robot 180 degrees in place without changing position.'
                    },
                    kind: monaco.languages.CompletionItemKind.EnumMember,
                    sortText: '004'
                }
            ];
            // === B. Maze Runner Global Environment Data ===
            const mazeDataCompletions = [
                {
                    label: 'MAZE_DATA',
                    insertText: 'MAZE_DATA',
                    detail: '🌐 Global Environment dict',
                    documentation: {
                        value: '**`MAZE_DATA`**\n\nThe simulator dictionary provided to `solve()`:\n- `grid`: 2D bitmask array `[y][x]`\n- `start_node`: (x, y) start cell coordinates\n- `end_node`: (x, y) destination cell coordinates\n- `width`: arena column count\n- `height`: arena row count'
                    },
                    kind: monaco.languages.CompletionItemKind.Variable,
                    sortText: '010'
                },
                {
                    label: "MAZE_DATA['grid']",
                    insertText: "MAZE_DATA['grid']",
                    detail: '🧱 2D bitmask grid [y][x]',
                    documentation: {
                        value: '**`MAZE_DATA[\'grid\']`**\n\nAccess the bitwise wall integer for any cell `[row][col]`. Values: `1=North`, `2=East`, `4=South`, `8=West`.'
                    },
                    kind: monaco.languages.CompletionItemKind.Property,
                    sortText: '011'
                },
                {
                    label: "MAZE_DATA['start_node']",
                    insertText: "MAZE_DATA['start_node']",
                    detail: '🏁 (x, y) starting coordinate',
                    documentation: {
                        value: '**`MAZE_DATA[\'start_node\']`**\n\nTuple `(start_x, start_y)` indicating where the robot starts (defaults to `(0, 0)`).'
                    },
                    kind: monaco.languages.CompletionItemKind.Property,
                    sortText: '012'
                },
                {
                    label: "MAZE_DATA['end_node']",
                    insertText: "MAZE_DATA['end_node']",
                    detail: '🎯 (x, y) goal coordinate',
                    documentation: {
                        value: '**`MAZE_DATA[\'end_node\']`**\n\nTuple `(goal_x, goal_y)` indicating the destination cell (defaults to `(width-1, height-1)`).'
                    },
                    kind: monaco.languages.CompletionItemKind.Property,
                    sortText: '013'
                },
                {
                    label: "MAZE_DATA['width']",
                    insertText: "MAZE_DATA['width']",
                    detail: '📏 Arena width in cells',
                    documentation: {
                        value: '**`MAZE_DATA[\'width\']`**\n\nInteger number of columns in the grid.'
                    },
                    kind: monaco.languages.CompletionItemKind.Property,
                    sortText: '014'
                },
                {
                    label: "MAZE_DATA['height']",
                    insertText: "MAZE_DATA['height']",
                    detail: '📐 Arena height in cells',
                    documentation: {
                        value: '**`MAZE_DATA[\'height\']`**\n\nInteger number of rows in the grid.'
                    },
                    kind: monaco.languages.CompletionItemKind.Property,
                    sortText: '015'
                }
            ];
            // === C. Wall Constants & Bitmasks ===
            const wallConstants = [
                {
                    label: 'NORTH = 1',
                    insertText: 'NORTH = 1',
                    detail: '🧭 Bitmask: North wall (y - 1)',
                    documentation: {
                        value: 'Bit 0 (`1`): Set if there is a wall on the North side of the cell.'
                    },
                    kind: monaco.languages.CompletionItemKind.Constant,
                    sortText: '020'
                },
                {
                    label: 'EAST = 2',
                    insertText: 'EAST = 2',
                    detail: '🧭 Bitmask: East wall (x + 1)',
                    documentation: {
                        value: 'Bit 1 (`2`): Set if there is a wall on the East side of the cell.'
                    },
                    kind: monaco.languages.CompletionItemKind.Constant,
                    sortText: '021'
                },
                {
                    label: 'SOUTH = 4',
                    insertText: 'SOUTH = 4',
                    detail: '🧭 Bitmask: South wall (y + 1)',
                    documentation: {
                        value: 'Bit 2 (`4`): Set if there is a wall on the South side of the cell.'
                    },
                    kind: monaco.languages.CompletionItemKind.Constant,
                    sortText: '022'
                },
                {
                    label: 'WEST = 8',
                    insertText: 'WEST = 8',
                    detail: '🧭 Bitmask: West wall (x - 1)',
                    documentation: {
                        value: 'Bit 3 (`8`): Set if there is a wall on the West side of the cell.'
                    },
                    kind: monaco.languages.CompletionItemKind.Constant,
                    sortText: '023'
                },
                {
                    label: 'WALL_MASKS',
                    insertText: "WALL_MASKS = {'NORTH': 1, 'EAST': 2, 'SOUTH': 4, 'WEST': 8}",
                    detail: '🧭 Wall masks dictionary',
                    documentation: {
                        value: 'Convenient dictionary mapping direction names to their bitwise wall masks.'
                    },
                    kind: monaco.languages.CompletionItemKind.Constant,
                    sortText: '024'
                },
                {
                    label: 'DIR_OFFSETS',
                    insertText: "DIR_OFFSETS = {'NORTH': (0, -1), 'EAST': (1, 0), 'SOUTH': (0, 1), 'WEST': (-1, 0)}",
                    detail: '🧭 Direction coordinate offsets (dx, dy)',
                    documentation: {
                        value: 'Maps each direction to its grid change `(dx, dy)`.'
                    },
                    kind: monaco.languages.CompletionItemKind.Constant,
                    sortText: '025'
                }
            ];
            // === D. Snippets & Code Predictions ===
            const codeSnippets = [
                {
                    label: 'def solve():',
                    insertText: [
                        'def solve():',
                        '    """Solve the maze and return a list of movement commands."""',
                        '    commands = []',
                        "    start = MAZE_DATA['start_node']",
                        "    goal = MAZE_DATA['end_node']",
                        "    grid = MAZE_DATA['grid']",
                        '    ',
                        '    ${0:# TODO: Add your pathfinding or commands here}',
                        '    ',
                        '    return commands'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    detail: '⚡ Maze Runner Entrypoint Function',
                    documentation: {
                        value: 'Creates the required `def solve():` function that returns a list of commands.'
                    },
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    sortText: '000'
                },
                {
                    label: 'commands.append()',
                    insertText: "commands.append('${1|FORWARD,LEFT,RIGHT,U_TURN|}')",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    detail: '⚡ Append command to output list',
                    documentation: {
                        value: 'Appends a movement command (`FORWARD`, `LEFT`, `RIGHT`, `U_TURN`) to the commands list.'
                    },
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    sortText: '005'
                },
                {
                    label: 'check_wall_snippet',
                    insertText: [
                        "# Check if path is open at (x, y) in direction (${1:1=N, 2=E, 4=S, 8=W})",
                        "walls = MAZE_DATA['grid'][${2:y}][${3:x}]",
                        "if not (walls & ${1:1}):",
                        "    ${0:# Path is open, no wall}"
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    detail: '⚡ Wall Bitmask Check Snippet',
                    documentation: {
                        value: 'Tests if a wall is present at cell `(x, y)` using bitwise AND (`walls & mask`).'
                    },
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    sortText: '030'
                },
                {
                    label: 'bfs_algorithm_snippet',
                    insertText: [
                        'from collections import deque',
                        '',
                        'def bfs(start, goal, grid, width, height):',
                        '    queue = deque([(start[0], start[1], [])])',
                        '    visited = set([(start[0], start[1])])',
                        '    ',
                        '    dirs = [',
                        "        ('NORTH', 0, -1, 1),",
                        "        ('EAST',  1,  0, 2),",
                        "        ('SOUTH', 0,  1, 4),",
                        "        ('WEST', -1,  0, 8),",
                        '    ]',
                        '    ',
                        '    while queue:',
                        '        cx, cy, path = queue.popleft()',
                        '        if (cx, cy) == goal:',
                        '            return path',
                        '        ',
                        '        walls = grid[cy][cx]',
                        '        for name, dx, dy, mask in dirs:',
                        '            if not (walls & mask):',
                        '                nx, ny = cx + dx, cy + dy',
                        '                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:',
                        '                    visited.add((nx, ny))',
                        '                    queue.append((nx, ny, path + [(nx, ny)]))',
                        '    return []',
                        '${0}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    detail: '⚡ Complete BFS Pathfinding Algorithm',
                    documentation: {
                        value: 'Breadth-First Search template with queue and visited set.'
                    },
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    sortText: '031'
                },
                {
                    label: 'calculate_turns_snippet',
                    insertText: [
                        '# Heading directions: 0=NORTH, 1=EAST, 2=SOUTH, 3=WEST',
                        'diff = (${1:target_dir} - ${2:current_heading}) % 4',
                        'if diff == 1:',
                        "    commands.append('RIGHT')",
                        'elif diff == 2:',
                        "    commands.append('U_TURN')",
                        'elif diff == 3:',
                        "    commands.append('LEFT')",
                        "commands.append('FORWARD')",
                        '${0}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    detail: '⚡ Relative Turn & Forward Movement Logic',
                    documentation: {
                        value: 'Calculates the relative turn (`LEFT`, `RIGHT`, `U_TURN`) between headings and appends `FORWARD`.'
                    },
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    sortText: '032'
                },
                {
                    label: 'for_grid_cells',
                    insertText: [
                        "for r in range(MAZE_DATA['height']):",
                        "    for c in range(MAZE_DATA['width']):",
                        "        walls = MAZE_DATA['grid'][r][c]",
                        '        ${0:# Process cell}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    detail: '⚡ Iterate All Maze Cells',
                    documentation: {
                        value: 'Nested loop scanning each coordinate in the maze arena.'
                    },
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    sortText: '033'
                }
            ];
            // === E. Standard Python Keywords & Built-ins ===
            const pythonBuiltins = [
                {
                    label: 'return',
                    insertText: 'return ',
                    kind: monaco.languages.CompletionItemKind.Keyword
                },
                {
                    label: 'import',
                    insertText: 'import ',
                    kind: monaco.languages.CompletionItemKind.Keyword
                },
                {
                    label: 'from',
                    insertText: 'from ',
                    kind: monaco.languages.CompletionItemKind.Keyword
                },
                {
                    label: 'while',
                    insertText: 'while ${1:condition}:\n    ${0}',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    kind: monaco.languages.CompletionItemKind.Keyword
                },
                {
                    label: 'if',
                    insertText: 'if ${1:condition}:\n    ${0}',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    kind: monaco.languages.CompletionItemKind.Keyword
                },
                {
                    label: 'elif',
                    insertText: 'elif ${1:condition}:\n    ${0}',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    kind: monaco.languages.CompletionItemKind.Keyword
                },
                {
                    label: 'else:',
                    insertText: 'else:\n    ${0}',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    kind: monaco.languages.CompletionItemKind.Keyword
                },
                {
                    label: 'for in range',
                    insertText: 'for ${1:i} in range(${2:n}):\n    ${0}',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    kind: monaco.languages.CompletionItemKind.Snippet
                },
                {
                    label: 'print()',
                    insertText: 'print(${1:msg})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    kind: monaco.languages.CompletionItemKind.Function
                },
                {
                    label: 'len()',
                    insertText: 'len(${1:obj})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    kind: monaco.languages.CompletionItemKind.Function
                },
                {
                    label: 'range()',
                    insertText: 'range(${1:stop})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    kind: monaco.languages.CompletionItemKind.Function
                },
                {
                    label: 'deque',
                    insertText: 'from collections import deque',
                    kind: monaco.languages.CompletionItemKind.Module
                },
                {
                    label: 'heapq',
                    insertText: 'import heapq',
                    kind: monaco.languages.CompletionItemKind.Module
                }
            ];
            // Context-aware predictions:
            // If user is inside a string quote or right after 'commands.append('
            if (textUntilPosition.endsWith("'") || textUntilPosition.endsWith('"') || textUntilPosition.includes('commands.append')) {
                motionCommands.forEach((item)=>{
                    // If already inside quotes, insert without quotes
                    const rawText = item.label.replace(/'/g, '');
                    suggestions.push({
                        ...item,
                        insertText: textUntilPosition.endsWith("'") || textUntilPosition.endsWith('"') ? rawText : item.insertText,
                        range
                    });
                });
            }
            // If user typed 'MAZE_DATA['
            if (textUntilPosition.endsWith("MAZE_DATA['") || textUntilPosition.endsWith('MAZE_DATA["')) {
                [
                    'grid',
                    'start_node',
                    'end_node',
                    'width',
                    'height'
                ].forEach((key)=>{
                    suggestions.push({
                        label: key,
                        insertText: `${key}']`,
                        detail: `MAZE_DATA property`,
                        kind: monaco.languages.CompletionItemKind.Property,
                        range
                    });
                });
            }
            // Combine all general suggestions
            const allItems = [
                ...motionCommands,
                ...mazeDataCompletions,
                ...wallConstants,
                ...codeSnippets,
                ...pythonBuiltins
            ];
            allItems.forEach((item)=>{
                suggestions.push({
                    ...item,
                    range
                });
            });
            return {
                suggestions
            };
        }
    });
    // 2. Register Inline Completions Provider (AI-like Ghost Text Predictions)
    if (monaco.languages.registerInlineCompletionsProvider) {
        monaco.languages.registerInlineCompletionsProvider('python', {
            provideInlineCompletions: (model, position)=>{
                const lineContent = model.getLineContent(position.lineNumber);
                const prefix = lineContent.substring(0, position.column - 1).trim();
                const predictions = [];
                // Dynamic inline text predictions based on current line context
                if (prefix === 'def solve' || prefix === 'def solve(') {
                    predictions.push({
                        insertText: '():\n    commands = []\n    return commands'
                    });
                } else if (prefix === 'commands.append(') {
                    predictions.push({
                        insertText: "'FORWARD')"
                    });
                    predictions.push({
                        insertText: "'RIGHT')"
                    });
                    predictions.push({
                        insertText: "'LEFT')"
                    });
                } else if (prefix === "commands.append('F" || prefix === 'commands.append("F') {
                    predictions.push({
                        insertText: "ORWARD')"
                    });
                } else if (prefix === "commands.append('L" || prefix === 'commands.append("L') {
                    predictions.push({
                        insertText: "EFT')"
                    });
                } else if (prefix === "commands.append('R" || prefix === 'commands.append("R') {
                    predictions.push({
                        insertText: "IGHT')"
                    });
                } else if (prefix === "commands.append('U" || prefix === 'commands.append("U') {
                    predictions.push({
                        insertText: "_TURN')"
                    });
                } else if (prefix === 'walls =') {
                    predictions.push({
                        insertText: " MAZE_DATA['grid'][y][x]"
                    });
                } else if (prefix === 'if not (walls &') {
                    predictions.push({
                        insertText: ' 1):  # North path open'
                    });
                } else if (prefix === 'start =') {
                    predictions.push({
                        insertText: " MAZE_DATA['start_node']"
                    });
                } else if (prefix === 'goal =') {
                    predictions.push({
                        insertText: " MAZE_DATA['end_node']"
                    });
                } else if (prefix === 'grid =') {
                    predictions.push({
                        insertText: " MAZE_DATA['grid']"
                    });
                } else if (prefix === 'from collections import') {
                    predictions.push({
                        insertText: ' deque'
                    });
                } else if (prefix === 'return') {
                    predictions.push({
                        insertText: ' commands'
                    });
                }
                return {
                    items: predictions.map((p)=>({
                            insertText: p.insertText,
                            range: {
                                startLineNumber: position.lineNumber,
                                endLineNumber: position.lineNumber,
                                startColumn: position.column,
                                endColumn: position.column
                            }
                        }))
                };
            },
            freeInlineCompletions: ()=>{}
        });
    }
    // 3. Register Hover Documentation Provider
    monaco.languages.registerHoverProvider('python', {
        provideHover: (model, position)=>{
            const word = model.getWordAtPosition(position);
            if (!word) return null;
            const hoverDocs = {
                MAZE_DATA: '### `MAZE_DATA` (Global Dictionary)\nContains all information about the generated maze:\n- `grid`: 2D list of bitwise wall integers `[row][col]`\n- `start_node`: `(x, y)` coordinate tuple\n- `end_node`: `(x, y)` coordinate tuple\n- `width`: Integer width in cells\n- `height`: Integer height in cells',
                FORWARD: '### Command: `FORWARD`\nMoves the robot 1 cell forward according to its orientation.\n⚠️ Colliding with a wall adds a **5-second penalty**.',
                LEFT: '### Command: `LEFT`\nTurns the robot 90 degrees counter-clockwise in place.',
                RIGHT: '### Command: `RIGHT`\nTurns the robot 90 degrees clockwise in place.',
                U_TURN: '### Command: `U_TURN`\nTurns the robot 180 degrees in place.',
                solve: '### Entrypoint: `def solve():`\nThe main function executed by the WASM Python runner. It must return a list of movement command strings.'
            };
            const doc = hoverDocs[word.word];
            if (doc) {
                return {
                    range: new monaco.Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn),
                    contents: [
                        {
                            value: doc
                        }
                    ]
                };
            }
            return null;
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/pyodideRunner.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "executePythonSolver",
    ()=>executePythonSolver,
    "getPyodideInstance",
    ()=>getPyodideInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$algorithmVisualizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/algorithmVisualizer.ts [app-client] (ecmascript)");
;
let pyodideLoadingPromise = null;
async function getPyodideInstance(onLog) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (window.pyodideInstance) {
        return window.pyodideInstance;
    }
    if (pyodideLoadingPromise) {
        return pyodideLoadingPromise;
    }
    pyodideLoadingPromise = (async ()=>{
        // Check if script is already present or load it
        if (!window.loadPyodide) {
            onLog?.('Loading WebAssembly Python engine (Pyodide)...', 'info');
            await new Promise((resolve, reject)=>{
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
                script.onload = ()=>resolve();
                script.onerror = ()=>reject(new Error('Failed to load Pyodide CDN script'));
                document.head.appendChild(script);
            });
        }
        onLog?.('Initializing Pyodide WebAssembly runtime...', 'info');
        const pyodide = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/'
        });
        window.pyodideInstance = pyodide;
        onLog?.('Python WebAssembly runtime is ready!', 'info');
        return pyodide;
    })();
    return pyodideLoadingPromise;
}
async function executePythonSolver(code, mazeData, onLogOutput) {
    const logs = [];
    try {
        const pyodide = await getPyodideInstance(onLogOutput);
        // Setup stdout capture in Python
        const stdoutCaptureCode = `
import sys
import io

class WebStdout(io.StringIO):
    def __init__(self, callback):
        super().__init__()
        self.callback = callback
    def write(self, s):
        if s.strip():
            self.callback(s)
        return len(s)

_captured_logs = []
def _py_log(msg):
    _captured_logs.append(msg)

sys.stdout = WebStdout(_py_log)
sys.stderr = WebStdout(_py_log)
`;
        pyodide.runPython(stdoutCaptureCode);
        // Inject MAZE_DATA into Python global namespace
        const mazeDataJson = JSON.stringify(mazeData);
        pyodide.runPython(`
import json
MAZE_DATA = json.loads('''${mazeDataJson}''')
`);
        // Reset captured logs
        pyodide.runPython(`_captured_logs.clear()`);
        // Run user's script
        pyodide.runPython(code);
        // Check if solve() function exists
        const hasSolve = pyodide.runPython(`callable(globals().get("solve"))`);
        if (!hasSolve) {
            throw new Error('Function `solve()` was not found in your Python code. Please define `def solve():` that returns a command array.');
        }
        // Call solve()
        const pyResult = pyodide.runPython(`solve()`);
        // Retrieve stdout logs
        const pyLogs = pyodide.runPython(`list(_captured_logs)`);
        const capturedLogsList = pyLogs.toJs ? pyLogs.toJs() : [];
        for (const log of capturedLogsList){
            logs.push(log);
            onLogOutput(log, 'info');
        }
        if (!pyResult) {
            throw new Error('`solve()` returned None or nothing. Expected an array of commands like ["FORWARD", "RIGHT"].');
        }
        // Convert PyProxy to JS Array
        const rawCommands = pyResult.toJs ? pyResult.toJs() : pyResult;
        if (!Array.isArray(rawCommands)) {
            throw new Error(`Expected solve() to return a list/array of commands, but received: ${typeof rawCommands}`);
        }
        // Validate commands
        const validCommands = [];
        for(let i = 0; i < rawCommands.length; i++){
            const cmd = String(rawCommands[i]).toUpperCase().trim();
            if (![
                'FORWARD',
                'LEFT',
                'RIGHT',
                'U_TURN'
            ].includes(cmd)) {
                throw new Error(`Invalid motor command at index ${i}: "${cmd}". Allowed: 'FORWARD', 'LEFT', 'RIGHT', 'U_TURN'`);
            }
            validCommands.push(cmd);
        }
        let visualizerData;
        try {
            visualizerData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$algorithmVisualizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractAlgorithmVisualizerData"])(pyodide, code, validCommands, mazeData);
        } catch (e) {
            console.warn('Failed to extract visualizer telemetry:', e);
        }
        return {
            success: true,
            commands: validCommands,
            logs,
            visualizerData
        };
    } catch (err) {
        const errorMsg = err?.message || String(err);
        onLogOutput(errorMsg, 'error');
        return {
            success: false,
            commands: [],
            logs,
            error: errorMsg
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_1y8m68vs59t9y._.js.map