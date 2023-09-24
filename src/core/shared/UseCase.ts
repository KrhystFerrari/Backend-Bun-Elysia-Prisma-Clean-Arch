export default interface UseCase<E, S> {
    execute(enter: E): Promise<S>
}