class SingletonManager {
  // A static map to hold instances of different classes. The key is the class name, and the value is the instance of that class.
  private static instances: Map<string, any> = new Map();

  // A static method to get the singleton instance of a class. The method takes a class reference as an argument.
  static getInstance<T>(ClassRef: new () => T): T {
    // Get the class name from the reference.
    const className = ClassRef.name;

    // Check if an instance of this class already exists in the map.
    if (!this.instances.has(className)) {
      // If it doesn't exist, create a new instance and store it in the map.
      this.instances.set(className, new ClassRef());
    }

    // Return the existing or newly created instance from the map.
    return this.instances.get(className);
  }

  // A static method to clear the singleton instance of a class. This method is useful for resetting the state or during testing.
  static clearInstance(ClassRef: new () => any): void {
    // Get the class name from the reference.
    const className = ClassRef.name;

    // Remove the instance of the class from the map.
    this.instances.delete(className);
  }
}

// Export the SingletonManager class as the default export of this module.
export default SingletonManager;
