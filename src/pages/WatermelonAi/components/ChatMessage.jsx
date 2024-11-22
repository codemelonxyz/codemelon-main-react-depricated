import ReactMarkdown from 'react-markdown';

const ChatMessage = ({ isUser, content, codeSnippet }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className="flex items-start max-w-3xl">
        {!isUser && (
          <div className="w-8 h-8 rounded-full bg-[] flex items-center justify-center mr-2 flex-shrink-0">
            <img src="/nobackgroundlogo.png" alt="Watermelon" className="w-6 h-6" />
          </div>
        )}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <span className="text-sm text-gray-400 mb-1">{isUser ? 'You' : 'Watermelon'}</span>
          <div className="bg-gray-800 rounded-lg p-3">
            {isUser ? (
              <p className="text-white text-sm">{content}</p>
            ) : (
              <ReactMarkdown className="text-white text-sm">
                {content}
              </ReactMarkdown>
            )}
            {codeSnippet && (
              <div className="mt-2 bg-[#1a1a1a] rounded-md p-3">
                <pre className="text-[#7680af] text-sm font-mono whitespace-pre-wrap">{codeSnippet}</pre>
              </div>
            )}
          </div>
        </div>
        {isUser && (
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center ml-2 flex-shrink-0">
            <span className="text-white text-sm">Y</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;


// when it is !user then the response will be like this 
// Okay, I can give you several DFS (Depth-First Search) code examples, catering to different needs and programming languages. To give you the *best* code, I need a little more information: 1. **Data Structure:** What data structure will you be searching? A graph represented as an adjacency list (most common), an adjacency matrix, or something else? 2. **Programming Language:** Python, JavaScript, C++, Java, etc.? The syntax will vary significantly. 3. **Specifics:** Do you need to find a specific node? Do you need to traverse the entire graph? Do you need to handle cycles (loops) in the graph? Should the code handle weighted edges (edges with associated costs)? **Here are a few examples:** **Example 1: Python, using an adjacency list for an unweighted, undirected graph (finds all reachable nodes):** ```python def dfs(graph, start, visited=None): """ Performs Depth-First Search on an unweighted, undirected graph. Args: graph: A dictionary representing the graph where keys are nodes and values are lists of their neighbors. start: The starting node for the search. visited: A set to keep track of visited nodes (optional, defaults to an empty set). """ if visited is None: visited = set() visited.add(start) print(start, end=" ") # Process the current node (e.g., print it) for neighbor in graph.get(start, []): # Handle cases where a node might not have neighbors if neighbor not in visited: dfs(graph, neighbor, visited) # Example graph represented as an adjacency list graph = { 'A': ['B', 'C'], 'B': ['A', 'D', 'E'], 'C': ['A', 'F'], 'D': ['B'], 'E': ['B', 'F'], 'F': ['C', 'E'] } dfs(graph, 'A') # Start DFS from node 'A' ``` **Example 2: Python, using recursion to find a specific node:** ```python def dfs_find_node(graph, start, target): """ Performs DFS to find a specific node in an unweighted, undirected graph. Args: graph: A dictionary representing the graph. start: The starting node. target: The node to search for. Returns: True if the target node is found, False otherwise. """ visited = set() stack = [start] while stack: node = stack.pop() if node == target: return True visited.add(node) for neighbor in graph.get(node, []): if neighbor not in visited: stack.append(neighbor) return False # Example usage (using the same graph as above): print(f"\nIs node 'F' reachable from 'A'? {dfs_find_node(graph, 'A', 'F')}") print(f"Is node 'G' reachable from 'A'? {dfs_find_node(graph, 'A', 'G')}") ``` These are just basic examples. Provide me with more details about your specific needs, and I'll generate a more tailored and efficient DFS implementation for you. Remember to specify the programming language and data structure!
