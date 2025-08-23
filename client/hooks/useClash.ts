import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // MutationFunction,
} from '@tanstack/react-query'
import { getClashRoyaleBattleLog, getClashRoyaleStats } from '../apis/clash.ts'

export function useClash() {
  const query = useQuery({ queryKey: ['clash'], queryFn: getClashRoyaleStats })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useClashBattleLog() {
  const query = useQuery({queryKey: ['battlelog'], queryFn: getClashRoyaleBattleLog })
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
