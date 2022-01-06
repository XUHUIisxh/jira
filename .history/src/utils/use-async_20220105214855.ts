interface State<D> {
  error: Error | null;
  data: D | null;
  stat: "idle" | "loading" | "error" | "success";
}

const defauluInitialState: State<null> = {
  stat: "idle",
  data: null,
  error: null,
};

export const useAsync = () => {};
