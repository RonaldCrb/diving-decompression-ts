import * as index from "./index"
// @ponicode
describe("index.noDecompressionLimit", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.noDecompressionLimit({ depth: 1, bottomTime: 90 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.noDecompressionLimit({ depth: 0, bottomTime: 520 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.noDecompressionLimit({ depth: 1, bottomTime: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.noDecompressionLimit({ depth: -100, bottomTime: 90 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.noDecompressionLimit({ depth: 100, bottomTime: 50 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.noDecompressionLimit({ depth: Infinity, bottomTime: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.repetLetter", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.repetLetter({ depth: 100, bottomTime: 410, sit: 12345, nextDepth: 12 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.repetLetter({ depth: -100, bottomTime: 400, sit: 12, nextDepth: 12345 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.repetLetter({ depth: 100, bottomTime: 30, sit: "a1969970175", nextDepth: "a1969970175" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.repetLetter({ depth: -100, bottomTime: 400, sit: 12345, nextDepth: 987650 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.repetLetter({ depth: -5.48, bottomTime: 100, sit: "a1969970175", nextDepth: 12 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.repetLetter({ depth: -Infinity, bottomTime: -Infinity, sit: -Infinity, nextDepth: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.residualNitrogenTime", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.residualNitrogenTime({ depth: 0, bottomTime: 520, sit: "a1969970175", nextDepth: 12345 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.residualNitrogenTime({ depth: -100, bottomTime: 350, sit: 12345, nextDepth: "a1969970175" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.residualNitrogenTime({ depth: 1, bottomTime: 350, sit: "bc23a9d531064583ace8f67dad60f6bb", nextDepth: 56784 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.residualNitrogenTime({ depth: 1, bottomTime: 50, sit: 12, nextDepth: "bc23a9d531064583ace8f67dad60f6bb" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.residualNitrogenTime({ depth: 0, bottomTime: 380, sit: 12, nextDepth: 12345 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.residualNitrogenTime({ depth: NaN, bottomTime: NaN, sit: NaN, nextDepth: NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.decoDive", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.decoDive({ depth: 100, bottomTime: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.decoDive({ depth: 1, bottomTime: 380 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.decoDive({ depth: 0, bottomTime: 410 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.decoDive({ depth: 100, bottomTime: 50 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.decoDive({ depth: 0, bottomTime: 30 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.decoDive({ depth: Infinity, bottomTime: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
