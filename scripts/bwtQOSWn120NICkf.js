let test = await this.actor.setupCharacteristic("ag", {fields : {difficulty : "hard"}});
await test.roll();

if (test.result.outcome == "failure")
{
   await this.actor.addCondition("bleeding")
   await this.actor.addCondition("entangled")
}