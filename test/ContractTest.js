const { expect } = require('chai');
const { ethers } = require('hardhat');
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");


describe('Coffee Contract', () => {

    //test variables
    const name = "Ronju";
    const message = "Hey, Ronju";
    const revertMessage = "Amount must be greater than 0 ether.";





    //deploy smart contract
    async function deployCoffeeFixture() {

        const Coffee = await ethers.getContractFactory("Coffee");
        const [owner, addr1] = await ethers.getSigners();
        const hardhatCoffee = await Coffee.deploy();

        await hardhatCoffee.deployed();

        return { Coffee, hardhatCoffee, owner, addr1 };
    }



    //test for buyCoffiee
    it('Should revert with the right error if amount <= 0.', async () => {
        const { hardhatCoffee, owner, addr1 } = await loadFixture(deployCoffeeFixture);

        //transaction params
        const params = [
            {
                from: addr1.address,
                to: owner.address,
                value: ethers.utils.parseEther("1.0")
            }
        ];

        await expect(hardhatCoffee.buyCoffee(name, message)).to.be.revertedWith(revertMessage);

    })

    //transaction test
    it('After transaction information must be stored.', async () => {

        const { hardhatCoffee } = await loadFixture(deployCoffeeFixture);


        await hardhatCoffee.buyCoffee(name, message, {
            value: ethers.utils.parseEther("1.0")
        });



        const memo = await hardhatCoffee.getMemos();

        expect(memo[0].name).to.equal(name);
        expect(memo[0].message).to.equal(message);


    })
})