const nums = [1, 5, 2, 4, 3]


function dfs(i) {
  if (i === 1 || i === 2) return i
  // dp[i] = dp[i-1] + dp[i-2]
  const count = dfs(i - 1) + dfs(i - 2)
  return count
}

// 爬楼梯：暴力搜索
function climbingStairsDFS(n) {
  return dfs(n)
}

function dfs2(i, mem) {
  if (i === 1 || i === 2) return i
  // 若存在记录 dp[i] ，则直接返回之
  if (mem[i] !== -1) return mem[i]
  // dp[i] = dp[i-1] + dp[i-2]
  const count = dfs2(i - 1, mem) + dfs2(i - 2, mem)
  mem[i] = count
  return count
}

// 爬楼梯：记忆化搜索，空间换时间
function climbingStairsDFS2(n) {
  const mem = new Array(n + 1).fill(-1)
  return dfs2(n, mem)
}

/* 爬楼梯：动态规划 */
function climbingStairsDP(n) {
  if (n === 1 || n === 2) return n
  // 初始化 dp 表，用于存储子问题的解
  const dp = new Array(n + 1).fill(-1)
  // 初始状态：预设最小子问题的解
  dp[1] = 1
  dp[2] = 2
  // 状态转移：从较小子问题逐步求解较大子问题
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}


function main() {
  console.time('爬楼梯: 穷举法')
  const count = climbingStairsDFS(9)
  console.timeLog('爬楼梯: 穷举法', count)
  console.timeEnd('爬楼梯: 穷举法')

  console.time('爬楼梯: 记忆化搜索')
  const count2 = climbingStairsDFS2(9)
  console.timeLog('爬楼梯: 记忆化搜索', count2)
  console.timeEnd('爬楼梯: 记忆化搜索')

  console.time('爬楼梯: 动态规划')
  const count3 = climbingStairsDP(9)
  console.timeLog('爬楼梯: 动态规划', count3)
  console.timeEnd('爬楼梯: 动态规划')

}
main()