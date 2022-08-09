const Land = artifacts.require("./Land");
const EVM_REVERT = 'VM Exception while processing transaction: revert'

require('chai')
.use(require('chai-as-promised'))
.should() 

contract("Land", ([owner1, owner2]) => {
    const NAME = "Samsara Building"
    const SYMBOL = "SB"
    const COST = web3.utils.toWei('0.01', 'ether')

    let land, result

    beforeEach( async () => {
        land = await Land.new(NAME, SYMBOL, COST)
    })

    describe("Deployment", () => {
        it("returns the contract name", async () => {
            result = await land.name()
            result.should.equal(NAME)
        })

        it("returns the symbol", async () => {
            result = await land.symbol()
            result.should.equal(SYMBOL)
        })

        it("returns the cost", async () => {
            result = await land.cost()
            result.toString().should.equal(COST)
        })

        it("returns the max supply", async () => {
            result = await land.maxSupply()
            result.toString().should.equal('6')
        })

        it("returns the building/land available", async () => {
            result = await land.getBuildings()
            result.length.should.equal(6)
        })
    })

    describe("Minting", () => {
        describe("Success", () => {
            beforeEach(async () => {
                result = await land.mint(1, {from: owner1, value: COST})
            })
          

          it("Update owner address", async () => {
            result = await land.ownerOf(1)
           await result.should.equal(owner1)
        })

        
        it("Update building details", async () => {
            result = await land.getBuildings(1)
           await result.owner.should.equal(owner1)
        })
        })

        describe('Failure', () => {
            it('Prevents mint with 0 value', async () => {
                await land.mint(1, { from: owner1, value: 0 }).should.be.rejectedWith(EVM_REVERT)
            })

            it('Prevents mint with invalid ID', async () => {
                await land.mint(100, { from: owner1, value: 1 }).should.be.rejectedWith(EVM_REVERT)
            })

            it('Prevents minting if already owned', async () => {
                await land.mint(1, { from: owner1, value: COST })
                await land.mint(1, { from: owner2, value: COST }).should.be.rejectedWith(EVM_REVERT)
            })
        })
    })

    describe('Transfers', () => {
        describe('success', () => {
            beforeEach(async () => {
                await land.mint(1, { from: owner1, value: COST })
                await land.approve(owner2, 1, { from: owner1 })
                await land.transferFrom(owner1, owner2, 1, { from: owner2 })
            })

            it('Updates the owner address', async () => {
                result = await land.ownerOf(1)
                result.should.equal(owner2)
            })

            it('Updates building details', async () => {
                result = await land.getBuildings(1)
                result.owner.should.equal(owner2)
            })
        })

        describe('failure', () => {
            it('Prevents transfers without ownership', async () => {
                await land.transferFrom(owner1, owner2, 1, { from: owner2 }).should.be.rejectedWith(EVM_REVERT)
            })

            it('Prevents transfers without approval', async () => {
                await land.mint(1, { from: owner1, value: COST })
                 await land.transferFrom(owner1, owner2, 1, { from: owner2 }).should.be.rejectedWith(EVM_REVERT)
            })
        })
    })
})