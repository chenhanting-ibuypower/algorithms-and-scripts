const coinChange = (coins, amount: number) => {
  // @ts-ignore
  let dp = new Array(amount + 1).fill(Infinity);
  console.log("dp:", dp)
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    console.log("====================", "The current i is", i, "====================")

    // For each coin value, check if it's possible to use it to make up the current amount.
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        console.log("dp:", dp)
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));

const generate_all_subsequences = (str: string) => {
  let result = [];
  let sub = '';
  let helper = (str: string, sub: string) => {
    if (str.length === 0) {
      // @ts-ignore
      result.push(sub);
      return;
    }
    helper(str.slice(1), sub);
    helper(str.slice(1), sub + str[0]);
  };
  helper(str, sub);
  return result;
}


console.log(generate_all_subsequences('abc'));