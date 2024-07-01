function Line({ color = "#FFB200" }: { color?: string }) {
  return (
    <div className={`h-1 w-20 rounded-full`} style={{ background: color }} />
  );
}

export default Line;
