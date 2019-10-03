function sum($1: number): number;
function sum($1: number, $2: number): number;
function sum($1: number, $2: number, $3: number): number;
function sum($1: number, $2?: number, $3?: number): number {
  return $1 + ($2 || 0) + ($3 || 0);
}
