/**
 * Check the condition and call the callback if the condition is true.
 * callback is always referencing the latest value
 * so that it doesn't have to register all values in the callback as deps to useEffect.
 * But it's not suitable when you need to keep tracking the value related to condition.
 *
 * @example
 * // when the condition is true, the callback is called.
 * useWhen(() => {
 *   if (shouldUpdateEvent) {
 *     // update event
 *   }
 * }, isDraggingEnd)
 *
 * @example
 * // avoid this when you need to keep updating `setGridDiff` by `currentGridPos` and `initGridPosition`.
 * useWhen(() => {
 *   // it will fire once.
 *   setGridDiff({
 *     columnIndex: currentGridPos.columnIndex - initGridPosition.columnIndex,
 *     rowIndex: currentGridPos.rowIndex - initGridPosition.rowIndex,
 *   });
 * }, isPresent(currentGridPos) && isPresent(initGridPosition));
 *
 * // You need to use `useEffect` this time.
 * useEffect(() => {
 *   setGridDiff({
 *     columnIndex: currentGridPos.columnIndex - initGridPosition.columnIndex,
 *     rowIndex: currentGridPos.rowIndex - initGridPosition.rowIndex,
 *   });
 * }, [currentGridPos, initGridPosition]);
 */
export declare function useWhen(callback: () => void, condition: boolean): void;
