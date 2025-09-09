import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // MutationFunction,
} from '@tanstack/react-query'
import {
  getClashLeaderboardLog,
  getClashRoyaleBattleLog,
  getClashRoyaleStats,
} from '../apis/clash.ts'
import { useAuth0 } from '@auth0/auth0-react'

export function useClash() {
  const { user, getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['clash'],
    enabled: !!user,
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      // console.log(token)
      return getClashRoyaleStats(token)
    },
  })
  console.log(query.data)
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useClashBattleLog() {
  const { user, getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['battlelog'],
    enabled: !!user,
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      // console.log(token)
      return getClashRoyaleBattleLog(token)
    },
  })
  return {
    ...query,
  }
}

export function useClashLeaderboardLog() {
  const query = useQuery({
    queryKey: ['leaderboard'],
    queryFn: getClashLeaderboardLog,
  })
  return {
    ...query,
  }
}

// export function useFruitsMutation<TData = unknown, TVariables = unknown>(
//   mutationFn: MutationFunction<TData, TVariables>,
// ) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['fruits'] })
//     },
//   })

//   return mutation
// }

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
